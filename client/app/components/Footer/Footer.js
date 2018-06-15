import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom'


export default class FooterComponent extends Component{
  constructor(props){
    super(props)
    //console.log(props.props)
  }


  render(){
    return(
      <footer className="footer-bs">
        <div className="row">
            <div className="col-md-3 footer-brand animated fadeInLeft">
                <h2>Logo</h2>
                  <p>Developed by Vishnu-Sharma.</p>
                  <p>© 2018 UI React, All rights reserved</p>
              </div>
            <div className="col-md-4 footer-nav animated fadeInUp">
                <h4>Menu —</h4>
                <div className="col-md-6">
                      <ul className="pages">
                          {/* <li><NavLink to="/">Home</NavLink></li> */}
                      </ul>
                  </div>
                <div className="col-md-6">
                      <ul className="list">
                          {/* <li><NavLink to="/">About Us</NavLink></li> */}
                      </ul>
                  </div>
              </div>
            <div className="col-md-2 footer-social animated fadeInDown">
                <h4>Follow Us</h4>
                <ul>
                    <li><NavLink target="_blank" to="http://facebook.com/vishnusharmaofficial">Facebook</NavLink></li>
                    <li><NavLink target="_blank" to="http://twitter.com/vishnuduvey">Twitter</NavLink></li>
                    <li><NavLink target="_blank" to="http://instagram.com/vishnuduvey">Instagram</NavLink></li>
                  </ul>
              </div>
            <div className="col-md-3 footer-ns animated fadeInRight">
                <h4>Newsletter</h4>
                  <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
              </div>
          </div>
      </footer>
    )
  }
}
