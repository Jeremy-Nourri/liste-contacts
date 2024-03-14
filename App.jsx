/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListContacts from './screens/ListContacts';
import SingleContact from './screens/SingleContact';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListContacts">
        <Stack.Screen name="ListContacts" component={ListContacts} options={{title : 'Mes contacts'}}/>
        <Stack.Screen name="SingleContact" component={SingleContact} options={{title : 'Contact'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

