import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './views/Login';
import Home from './views/Home';
import News from './views/News';

import {StateContext} from './state/provider/applicationProvider';

const Routes: React.FC = () => {
  const Stack = createStackNavigator();

  const {state} = useContext(StateContext);

  return (
    <Stack.Navigator>
      {state.user.signed ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="News" component={News} />
        </>
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default Routes;
