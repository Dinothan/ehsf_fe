import React from 'react';
import {Provider} from 'react-redux';
import {NativeBaseProvider, Box} from 'native-base';
import configureStore from './src/store/store';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import AppContainer from './src/navigations/AppNavigation';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NativeBaseProvider>
          <SafeAreaView style={{flex: 1}}>
            <AppContainer />
          </SafeAreaView>
        </NativeBaseProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
