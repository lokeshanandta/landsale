import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Page1 from '../screens';
import Page2 from '../screens/index1';
import Page3 from '../screens/index3';

function Navi() {
    
const Stack = createStackNavigator();
    return (
      
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Page1} />
          <Stack.Screen name="2Screen" component={Page2} />
          <Stack.Screen name="3Screen" component={Page3} />
        </Stack.Navigator>
      
    );
  }
  
  export default Navi;