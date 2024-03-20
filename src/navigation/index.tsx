import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenMap} from './screenMap';
import {HomeTodoScreen, NewTodoScreen, UpdateTodoScreen} from '../screens';

const AppContainer = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screenMap.HomeTodo}
          component={HomeTodoScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>

      <Stack.Screen
        name={screenMap.NewTodo}
        component={NewTodoScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={screenMap.UpdateTodo}
        component={UpdateTodoScreen}
        options={{headerShown: false}}
      />
    </NavigationContainer>
  );
};

export default AppContainer;
