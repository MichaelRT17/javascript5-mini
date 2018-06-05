import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this);
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
      .then(res => {
        this.setState({
          cars: res.data
        })
      })
  }

  render() {
    let mapped = this.state.cars.map((e) => {
      return (
        <div key={e.id}>
          <p>Make: {e.make}</p>
          <p>Model: {e.model}</p>
          <p>Year: {e.year}</p>
          <p>Color: {e.color}</p>
          <p>Price: {e.price}</p>
        </div>
      )
    })
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {mapped}
      </div>
    );
  }
}

export default App;
