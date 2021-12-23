import { useReducer } from 'react';
import './App.css';
import { addIncriment, resetIncriment } from './store/actions';
import { reducer } from './store/reducer';
import { initialStore } from './store/store';

function App() {

  const [state, dispath] = useReducer(reducer, initialStore);

  return (
    <div className="App">
      <h2>Все работает как надо!</h2>
      {state.number}
      <div>
        <button className='button-app' onClick={() => dispath(addIncriment(2))}>Увеличить</button>
        <button className='button-app reset' onClick={() => dispath(resetIncriment(0))}>Сбросить</button>
      </div>
    </div>
  );
}

export default App;
