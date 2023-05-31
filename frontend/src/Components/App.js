import React from 'react';
import PlayerList from './Player/PlayerList';
import PlayerForm from './Player/PlayerForm';
import PlayerSingle from './Player/PlayerSingle';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {}, //interstate
    };
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  componentDidMount() {
    const url = 'http://127.0.0.1:4000/players';

    axios
      .get(url)
      .then((response) => {
        this.setState({
          players: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <nav>
            <div className='nav-wrapper blue darken'>
              <a href='/' className='brand-logo'>
                Soccer Management
              </a>
              <ul id='nav-mobile' className='right hide-on-med-and-down'></ul>
            </div>
          </nav>
        </div>
        <div className='row'>
          <div className='col s3'>
            <PlayerList
              players={this.state.players}
              updateCurrentPlayer={this.updateCurrentPlayer}
            />
          </div>
          <div className='col s9'>
            <PlayerSingle player={this.state.currentPlayer} />
          </div>
        </div>
        <div className='row'>
          <div className='col s12'>
            <PlayerForm addPlayer={this.addPlayer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
