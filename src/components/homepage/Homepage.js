import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Homepage extends Component {
    render() {
        return (
            <div>
        <div>
          <Link to="/beers">
          <img src={require("../../assets/beers.png")} alt=''/>
            <h2>Beers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              excepturi iste vel sapiente maxime porro nam adipisci earum itaque
              dolor.
            </p>
          </Link>
        </div>

        <div>
          <Link to="/new-beer">
            <img src={require('../../assets/new-beer.png')} alt='' />
            <h2>New Beer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              excepturi iste vel sapiente maxime porro nam adipisci earum itaque
              dolor.
            </p>
          </Link>
        </div>

        <div>
          <Link to="/random-beer">
            <img src={require('../../assets/random-beer.png')} alt='' />
            <h2>Random Beer</h2>
            <p>
              Provident distinctio a optio id illo commodi! Ducimus amet quia
              iure asperiores quae suscipit delectus laborum doloremque dicta,
              incidunt blanditiis?
            </p>
          </Link>
        </div>
      </div>
        );
    }
}
