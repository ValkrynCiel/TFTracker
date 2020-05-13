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
  render() {
    return (
        <div className="App">
        <MatchHistoryPage />
        </div>
    );
  }
}

export default App;
