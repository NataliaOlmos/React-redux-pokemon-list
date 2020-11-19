import React from 'react'
import Pokemons from './components/Pokemon'
import { Provider } from 'react-redux'
import generateStore from './redux/store'
import { combineReducers } from 'redux'

function App() {

  const store = generateStore()

  return (
    <Provider store={store}>
      <Pokemons/>
    </Provider>
  );
}

export default App;
