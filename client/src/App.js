import React from 'react';
import axios from 'axios'

class App extends React.Component {
  state = {
    players: []
  }

  // fetch the players
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          players: res.data
        })
      })
      .catch(err => console.log(err.response))
  }

  render() {
    return (
      <div className="App">
        <h1>Test</h1>
      </div>
    );
  }
}

export default App;
