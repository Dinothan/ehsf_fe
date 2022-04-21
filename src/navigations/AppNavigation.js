import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LogBox} from 'react-native';
import {connect} from 'react-redux';
import Login from '../screens/login/Login';
import {StatusBar} from 'native-base';
import DrawerNavigator from './DrawerNavigator';
import Signup from '../screens/signup/Signup';

const AuthStack = createStackNavigator();
const RootStack = createStackNavigator();

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={Login}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="SignUp"
      component={Signup}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

const RootStackScreen = ({active}) => {
  return (
    <RootStack.Navigator initialRouteName={'Auth'}>
      {active ? (
        <RootStack.Screen
          name="MainStack"
          // component={MainStack}
          component={DrawerNavigator}
          options={{
            animationEnabled: true,
            headerShown: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: true,
            headerShown: false,
          }}
        />
      )}
    </RootStack.Navigator>
  );
};

const AppContainer = ({isAuthenticated}) => {
  const [active, setActive] = useState(isAuthenticated);
  useEffect(() => {
    setActive(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <NavigationContainer>
      <StatusBar translucent={true} />
      <RootStackScreen active={active} />
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(AppContainer);
