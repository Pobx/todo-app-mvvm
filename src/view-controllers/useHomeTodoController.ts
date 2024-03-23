import {useEffect} from 'react';
import useTodoViewModel from '../view-models/useTodoViewModel';
import {TodoItemType} from '../types/genericTypes';
import {useNavigation} from '@react-navigation/native';

const useHomeTodoController = () => {
  const navigation = useNavigation();
  const {todos, fetchingTodos} = useTodoViewModel();

  useEffect(() => {});

  const onPressTodoItem = (todoItem: TodoItemType) => {
    navigation.navigate('UpdateTodo', {todoItem});
    console.log('UpdateTodo');
  };

  const onPressCreate = () => {
    navigation.navigate('NewTodo');
    console.log('NewTodo');
  };

  return {
    todos,
    fetchingTodos,
    onPressTodoItem,
    onPressCreate,
  };
};

export default useHomeTodoController;
