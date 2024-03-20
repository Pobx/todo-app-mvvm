import {useNavigation} from '@react-navigation/native';
import {TodoItemType} from '../types/genericTypes';
import useTodoViewModel from '../view-models/useTodoViewModel';
import {useState} from 'react';

const useUpdateTodoController = (todo: TodoItemType) => {
  const navigation = useNavigation();
  const {updateTodo, updatingTodo, deleteTodo} = useTodoViewModel();

  const [todoText, setTodoText] = useState<string>(todo.title);

  const onChangeText = (text: string) => {
    setTodoText(text);
  };

  const onClickUpdate = () => {
    const payload = {
      id: todo.id,
      title: todoText,
    };

    updateTodo(payload);
    navigation.goBack();
  };

  const onClickDelete = () => {
    deleteTodo(todo.id);
    navigation.goBack();
  };

  return {
    todoText,
    onClickUpdate,
    onClickDelete,
    onChangeText,
    updatingTodo,
  };
};

export default useUpdateTodoController;
