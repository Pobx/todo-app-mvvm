import {useDispatch, useSelector} from 'react-redux';
import {StoreType, TodoStateType} from '../types/stateTypes';
import {TodoAction} from '../store/todoSlice';

const useTodoViewModel = () => {
  const dispatch = useDispatch();
  const {
    fetchingTodos,
    todos,

    creatingTodo,
    createTodoSuccess,
    createTodoError,

    updatingTodo,
    updateTodoSuccess,
    updateTodoError,

    deletingTodo,
    deleteTodoSuccess,
    deleteTodoError,
  }: TodoStateType = useSelector((state: StoreType) => state.todo);

  const {createTodo, updateTodo, deleteTodo} = TodoAction;

  return {
    fetchingTodos,
    todos,

    createTodo: (title: string) => dispatch(createTodo({title})),
    creatingTodo,
    createTodoSuccess,
    createTodoError,

    updateTodo: (payload: {id: string; title: string}) =>
      dispatch(updateTodo(payload)),
    updatingTodo,
    updateTodoSuccess,
    updateTodoError,

    deleteTodo: (id: string) => dispatch(deleteTodo({id})),
    deletingTodo,
    deleteTodoSuccess,
    deleteTodoError,
  };
};

export default useTodoViewModel;
