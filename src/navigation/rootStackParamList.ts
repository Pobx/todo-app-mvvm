import {TodoItemType} from '../types/genericTypes';

export type RootStackParamList = {
  HomeTodo: undefined;
  NewTodo: undefined;
  UpdateTodo: {todoItem: TodoItemType};
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
