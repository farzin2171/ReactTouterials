import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';
import {Provider} from 'react-redux'
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
       <Postform></Postform>
       <hr/>
       <Posts></Posts>
      </Provider>
    </div>
  );
}

export default App;
