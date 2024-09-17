import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import MyAppBar from './components/MyAppBar';
import { HomeScreen } from './screens/HomeScreen.js';
import { SecondScreen } from './screens/SecondScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            header: (props) => <MyAppBar {...props} />,
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SecondScreen" component={SecondScreen} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}