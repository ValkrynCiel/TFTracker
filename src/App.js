import React from 'react';
import ChampionImage from './ChampionThumbnail';
import './App.css';

function App() {
  return (
    <div className="App">
      <ChampionImage champion='ahri' stars={2}/>
      <ChampionImage champion='xerath' stars={3}/>
      <ChampionImage champion='shaco' stars={1}/>
    </div>
  );
}

export default App;
