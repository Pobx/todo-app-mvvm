import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import useUpdateTodoController from '../view-controllers/useUpdateTodoController';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/rootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'UpdateTodo'>;

const UpdateTodoScreen = ({route}: Props) => {
  const todoItem = route.params.todoItem;
  const {todoText, onChangeText, onClickDelete, onClickUpdate} =
    useUpdateTodoController(todoItem);

  return (
    <View style={styles.background}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Todo</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          value={todoText}
          style={styles.input}
          onChangeText={(text: string) => onChangeText(text)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onClickUpdate();
          }}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onClickDelete();
          }}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 8,
  },
  inputView: {
    marginVertical: 24,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    borderRadius: 8,
    marginVertical: 8,
  },
});

export default UpdateTodoScreen;
