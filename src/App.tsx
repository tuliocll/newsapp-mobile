/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StateProvider} from './state/provider/applicationProvider';
import Routes from './routes';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <StateProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </StateProvider>
  );
};

export default App;
