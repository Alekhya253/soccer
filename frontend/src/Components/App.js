import React from 'react';
import PlayerList from './Player/PlayerList';
import PlayerForm from './Player/PlayerForm';
import PlayerSingle from './Player/PlayerSingle';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col s12'>Menu</div>
        </div>
        <div className='row'>
          <div className='col s3'>PlayerList</div>
          <div className='col s9'>PlayerSingle</div>
        </div>
        <div className='row'>
          <div className='col s12'>PlayerForm</div>
        </div>
      </div>
    );
  }
}
export default App;