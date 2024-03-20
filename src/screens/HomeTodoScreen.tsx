import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TodoItem} from '../components';
import {TodoItemType} from '../types/genericTypes';
import useHomeTodoController from '../view-controllers/useHomeTodoController';

const HomeTodoScreen = () => {
  const {todos, onPressTodoItem, onPressCreate} = useHomeTodoController();
  const renderTodoList = ({item}: {item: TodoItemType}) => (
    <TodoItem title={item.title} onPress={() => onPressTodoItem(item)} />
  );

  return (
    <View style={styles.background}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Todo</Text>
        <TouchableOpacity style={styles.button} onPress={onPressCreate}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.todoList}>
        <FlatList
          keyExtractor={item => item.id}
          data={todos}
          renderItem={renderTodoList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  heading: {
    fontSize: 28,
    fontWeight: '500',
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#e7e7e7',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 8,
  },
  todoList: {
    marginVertical: 24,
  },
});

export default HomeTodoScreen;
