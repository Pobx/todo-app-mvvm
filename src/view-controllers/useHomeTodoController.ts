import {useEffect} from 'react';
import useTodoViewModel from '../view-models/useTodoViewModel';
import {TodoItemType} from '../types/genericTypes';
import {screenMap} from '../navigation/screenMap';
import {useNavigation} from '@react-navigation/native';

const useHomeTodoController = () => {
  const navigation = useNavigation();
  const {todos, fetchingTodos} = useTodoViewModel();

  useEffect(() => {});

  const onPressTodoItem = (todoItem: TodoItemType) => {
    navigation.navigate(screenMap.UpdateTodo, {todoItem});
  };

  const onPressCreate = () => navigation.navigate(screenMap.NewTodo);

  return {
    todos,
    fetchingTodos,
    onPressTodoItem,
    onPressCreate,
  };
};

export default useHomeTodoController;
