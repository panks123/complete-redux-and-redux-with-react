import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import './App.css';
import CakeContainerusingHooks from './components/CakeContainerusingHooks';
import IcecreamContainer from './components/IcecreamContainer';
import IcecreamContainerUsingHooks from './components/IcecreamContainerUsingHooks';
import FetchUsersContainer from './components/FetchUsersContainer';

// In this app we'll be using multiple reducers

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <hr/>
        <CakeContainerusingHooks/>
        <hr/>
        <hr/>
        <IcecreamContainer/>
        <hr/>
        <IcecreamContainerUsingHooks/>
        <hr/>
        <hr/>
        <hr/> 
        {/* Now we'll see how to work with async actions */ }
        <FetchUsersContainer/>
      </div>
    </Provider>
  );
}

export default App;
