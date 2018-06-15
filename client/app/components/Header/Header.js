import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Link, withRouter } from 'react-router-dom';
import PubSub from 'pubsub-js';

import NavComponent from '../Navigation/Nav';
import RouterComponent from '../../router/router';


export default class HeaderComponent extends Component{
  constructor(props){
    super(props);
    this.state = {imgSrc:'assets/img/logo.png'};
  }



  buttons(props){
    
    return (

      <div className="text-right float-right auth-link">
        <NavLink to="#" className="btn btn-outline-success right-mirgin" activeClassName="selected">Link</NavLink>
      </div>
      
        )
  }

  getNavigation(props){ 
      return(
        <NavComponent logoImage={this.state}/>
      )
  }
  render(){
    return(
        <Router>
          <div className="app-container">
          <header className="app-header">
            <div className="logo float-left">
              <img src={this.state.imgSrc} className="app-logo" alt="logo" />
            </div>
            {this.buttons(this.props)}
            
            <div className="clearfix"></div>
              {this.getNavigation(this.props)}
            </header>
            <RouterComponent />
          </div>
        </Router>
                       
          
    )
  }

}
