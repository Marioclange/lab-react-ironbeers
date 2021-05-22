import axios from 'axios';
import React, { Component } from 'react';
import './SingleBeer.css';

export default class SingleBeer extends Component {
  state = {
    theBeer: {},
  };
  async componentDidMount() {
    const beerId = this.props.match.params.beerId;
    const responseFromTheAPi = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
    );
    this.setState({
      theBeer: responseFromTheAPi.data,
    });
  }

  render() {
    // const beerId = this.props.match.params.beerId;
    // const beers = this.props.beers;
    // const theBeer = beers.find((beer) => beer._id === beerId);
    // console.log(theBeer);
    // if (!theBeer) return null;
    return (
      <div key={this.state.theBeer.name} className="beer-container">
        <img src={this.state.theBeer.image_url} alt="a beer" height="200px" />
        <div>
          <h2>Name: {this.state.theBeer.name}</h2>
          <h3>Description: <br/>
            {this.state.theBeer.description}</h3>
          <h4>Tagline: {this.state.theBeer.tagline}</h4>
          <h4>First_brewed: {this.state.theBeer.first_brewed}</h4>
          <h4>Attenuation_level: {this.state.theBeer.attenuation_level}</h4>
          <h5>Contributed_by: {this.state.theBeer.contributed_by}</h5>
        </div>
      </div>
    );
    
  }
}