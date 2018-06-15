import React, { Component } from 'react';
// import styles from './Nav.css';
import {NavLink, Link} from 'react-router-dom';

class NavComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {acc:'collapse navbar-collapse'};
   
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass(){
    if (this.state.acc == 'collapse navbar-collapse'){
      this.setState({acc:'collapse navbar-collapse show'})
    } else {
      this.setState({acc:'collapse navbar-collapse'})
    }
  }

  render() {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/#"><img style={logoStyle} src={this.props.logoImage.imgSrc} className="app-logo" alt="logo" /></NavLink>
          <button onClick={this.toggleClass} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={this.state.acc} id="navbarsExample07">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavComponent;

const logoStyle = {
  height:'24px'
};