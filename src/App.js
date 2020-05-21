import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import MatchHistoryPage from './MatchHistoryPage';
import MatchDetailsPage from './MatchDetailsPage';
import './App.css';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/na/summoner/:name'
                  render={rtp => <MatchHistoryPage {...rtp} />} />
            <Route exact path='/na/match/:id'
                  render={rtp => <MatchDetailsPage {...rtp} />} />
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
