import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import NavBar from './components/navbar/Navbar';
import AllBeers from './components/allbeers/AllBeers';
import SingleBeer from './components/singlebeer/SingleBeer';
import NewBeer from './components/newbeer/NewBeer';
import RandomBeer from './components/randombeer/RandomBeer';


import './App.css';

class App extends React.Component {
  state = {
  beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((responseApi) => {
        this.setState({
          beers: responseApi.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {

    return (
      <div className="App">
      <NavBar/>
      <Switch>
      <Route
            exact
            path="/beers"
            render={() => <AllBeers beers={this.state.beers} />}
          />
          <Route
            exact
            path="/beers/:beerId"
            render={(props) => (
              <SingleBeer {...props} beers={this.state.beers} />
            )}
          />
           <Route exact path="/new-beer" component={NewBeer} />
         <Route exact path="/random-beer" component={RandomBeer} />
      <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}
}

export default App;
