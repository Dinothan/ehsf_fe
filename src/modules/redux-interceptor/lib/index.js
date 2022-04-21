'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = createInterceptorMiddleware;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createInterceptorMiddleware() {
  var actions = [];
  var promises = [];
  var active = true;
  var resolved = false;

  function trackAction(exec) {
    if (typeof exec.then === 'function') {
      var untrack = function untrack() {
        var index = promises.indexOf(exec);

        if (index > -1) {
          promises.splice(index, 1);
        }
      };

      promises.push(exec);
      exec.then(untrack, untrack);
    }

    return exec;
  }

  function execAction(_ref) {
    var _resolve = _ref.resolve;
    var reject = _ref.reject;
    var next = _ref.next;
    var action = _ref.action;

    var exec = next(action);

    if (typeof exec.then === 'function') {
      return trackAction(exec).then(_resolve, reject);
    }

    return _promise2.default.resolve(exec);
  }

  function handleActions() {
    var followChain = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

    var deferHandleActions = function deferHandleActions() {
      return new _promise2.default(function (resolve, reject) {
        return setTimeout(function () {
          return handleActions().then(function () {
            return setTimeout(resolve, 0);
          }, function () {
            return setTimeout(reject, 0);
          });
        }, 0);
      });
    };

    if (!actions.length) {
      if (!promises.length) {
        active = false;
        return _promise2.default.resolve();
      }

      return _promise2.default.all(promises).then(deferHandleActions, deferHandleActions);
    }

    actions.map(execAction);

    var promise = _promise2.default.all(promises);

    actions = [];
    promises = [];

    if (followChain) {
      promise = promise.then(deferHandleActions, deferHandleActions);
    } else {
      active = false;
    }

    return promise;
  }

  function resolve() {
    var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref2$followChain = _ref2.followChain;
    var followChain = _ref2$followChain === undefined ? true : _ref2$followChain;

    if (resolved) {
      return _promise2.default.reject(new Error('the interceptor was already resolved'));
    }

    resolved = true;

    return handleActions(followChain);
  }

  function reset() {
    actions = [];
    promises = [];
    active = true;
    resolved = false;
  }

  var middleware = function middleware() {
    return function (next) {
      return function (action) {
        if (action.type && action.type.substr(0, 2) === '@@') {
          // allow internal actions
          return next(action);
        }

        if (resolved) {
          if (!active) {
            return next(action);
          }

          return trackAction(next(action));
        }

        return new _promise2.default(function (_resolve, reject) {
          actions.push({ resolve: _resolve, reject: reject, next: next, action: action });
        });
      };
    };
  };

  (0, _assign2.default)(middleware, { reset: reset, resolve: resolve });

  return middleware;
}