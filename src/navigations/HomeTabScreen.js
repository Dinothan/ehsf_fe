import React from 'react';
import {
  BottomTabHeaderProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/home/Home';
import {colors} from '../config/colors';
import {View} from 'native-base';
import Text from '../components/typography/Text';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const renderHeader = headerProps => {
  const {wifiIconStyle, hemMenuStyle, hemMenuViewStyle} = styles;
  return (
    <LinearGradient
      colors={[colors.primary.gold, '#008294']}
      style={styles.linearGradientStyle}
      start={{x: -0.1, y: 0}}
      end={{x: 0.5, y: 3}}>
      <TouchableOpacity
        style={hemMenuViewStyle}
        onPress={() => headerProps.navigation.openDrawer()}>
        <Image
          style={hemMenuStyle}
          source={require('../assets/images/home/hamMenu.png')}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.headerLayoutStyle}>{headerProps.route.name}</Text>
      </View>
    </LinearGradient>
  );
};
const HomeTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarIconStyle: {marginBottom: -8},
        headerShown: true,
        header: renderHeader,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Food Suggestion"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Food Suggestion',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="food" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="My Diet"
        component={HomeScreen}
        options={{
          tabBarLabel: 'My Diet',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="google-fit"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainStack = () => (
  <Stack.Navigator
    initialRouteName="HomeStack"
    screenOptions={{
      tabBarStyle: {padding: 5},
      headerShown: true,
      header: renderHeader,
    }}>
    <Stack.Screen
      name="HomeStack"
      component={HomeTabScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
export default MainStack;

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: 'Lexend Deca',
    fontSize: 8,
    color: colors.primary.teal,
    marginBottom: 5,
    fontWeight: '600',
  },
  labelInactiveStyle: {
    fontFamily: 'Lexend Deca',
    fontSize: 8,
    color: colors.dark[700],
    marginBottom: 5,
    fontWeight: '600',
  },
  hemMenuStyle: {
    height: 16,
    width: 20,
  },
  hemMenuViewStyle: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  wifiIconStyle: {flex: 1, alignItems: 'flex-end', paddingRight: 32},
  linearGradientStyle: {
    height: 80,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLayoutStyle: {
    fontSize: 14,
    fontFamily: 'LexendDeca-Regular',
    color: colors.neutral[700],
    marginLeft: 10,
  },
  homeHeaderTextStyle: {
    fontSize: 10,
    color: colors.neutral[700],
    paddingLeft: 10,
    fontFamily: 'Lexend Deca',
  },
});
