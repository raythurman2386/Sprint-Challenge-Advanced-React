import React from 'react';
import axios from 'axios'

// Components
import Players from './components/Players'

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
      <div className="App">
        <Players data={this.state.data} />
      </div>
    );
  }
}

export default App;
