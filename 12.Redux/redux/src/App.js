import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './reducers/configureStore';
import MovieComponent from './components/MovieComponent';


function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <MovieComponent />
    </Provider>
  );
}

export default App;
