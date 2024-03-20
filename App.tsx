import {Provider} from 'react-redux';
import store from './src/store';
import AppContainer from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
