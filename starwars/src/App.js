import React from 'react';
import Character from './components/Character'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <div className='Header'>
      <h1>Rick and Morty Characters</h1>
      <h2>Wanted by the Citadel of Ricks</h2>
      </div> 
      <Character />          
    </div>
  );
}

export default App;
