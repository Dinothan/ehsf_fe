import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import * as actions from '../../store/actions/index';

const Home = props => {
  return <View></View>;
};

const mapDispatchToProps = dispatch => {
  return {
    logout: callBack => dispatch(actions.logout(callBack)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
