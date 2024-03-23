import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeTodoScreen, NewTodoScreen, UpdateTodoScreen} from '../screens';
import {RootStackParamList} from './rootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTodo"
          component={HomeTodoScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="NewTodo"
          component={NewTodoScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="UpdateTodo"
          component={UpdateTodoScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
