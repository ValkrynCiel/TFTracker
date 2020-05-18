import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import MatchHistoryPage from './MatchHistoryPage';
import './App.css';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/summoner/na/:name'
                  render={rtp => <MatchHistoryPage {...rtp} />} />
            <Route exact path='/match/na/:id'
                  render={rtp => <h1>{() => rtp.id}</h1>} />
            <Route exact path='/teambuilder'
                  render={() => <h1>Teambuilder</h1>} />
            <Route exact path='/champions'
                  render={() => <h1>Champion information</h1>} />
            <Route exact path='/' render={() => <h1>HOME</h1>} />
            <Redirect to='/' />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
