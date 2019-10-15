import React from 'react';
import axios from 'axios'

// Components
import Players from './components/Players'
import Navbar from './components/Navbar';

class App extends React.Component {
  state = {
    data: []
  }

  // fetch the players
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          data: res.data
        })
      })
      .catch(err => console.log(err.response))
  }

  render() {
    return (
      <div data-testid="app-test-id" className="App">
        <Navbar />
        <Players data={this.state.data} />
      </div>
    );
  }
}

export default App;
