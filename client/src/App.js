import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import SummonerDetailsPage from './containers/SummonerDetailsPage';
import MatchDetailsPage from './containers/MatchDetailsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="view">
        <BrowserRouter>
          <Switch>
            <Route exact path='/na/summoner/:name'
                  render={rtp => <SummonerDetailsPage {...rtp} />} />
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
      <div className="background" />
    </div>
  );
}

export default App;
