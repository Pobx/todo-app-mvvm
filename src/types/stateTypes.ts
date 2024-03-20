import {TodoItemType} from './genericTypes';

export type TodoStateType = {
  fetchingTodos: boolean;
  todos: TodoItemType[];

  creatingTodo: boolean;
  createTodoSuccess: boolean;
  createTodoError: boolean;

  updatingTodo: boolean;
  updateTodoSuccess: boolean;
  updateTodoError: boolean;

  deletingTodo: boolean;
  deleteTodoSuccess: boolean;
  deleteTodoError: boolean;
};

export type StoreType = {
  todo: TodoStateType;
};
