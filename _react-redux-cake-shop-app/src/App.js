import CakeContainer from './components/CakeContainer';
import CakeContainerUsingHooks from './components/CakeContainerUsingHooks';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

function App() {
  return (
    // wrap the whole application inside the Provider component
    // and we provide the store with store prop to the whole react application
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>

        <hr/>
        {/* Now we'll see how we can access the redux store and how we can dispatch actions */}
        <CakeContainerUsingHooks/>
      </div>
    </Provider>
  );
}

export default App;
