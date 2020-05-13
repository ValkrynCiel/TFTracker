import React, {Component} from 'react';
import ChampionImage from './MatchHistoryPage/ChampionThumbnail';
import { getCompanionPortraitSrcs } from './helper';
import MatchHistoryPage from './MatchHistoryPage';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: []
        };
    }
    async componentDidMount() {
        this.setState({urls:  await getCompanionPortraitSrcs(gameData.info.participants)});
    }
  render() {
    return (
        <div className="App">
        <ChampionImage champion='ahri' stars={2}/>
        <ChampionImage champion='xerath' stars={3}/>
        <ChampionImage champion='shaco' stars={1}/>
        {this.state.urls.map(url => <img src = {url} />)}
        <MatchHistoryPage />
        </div>
    );
  }
}

export default App;
