import React, { Component } from 'react';

import FooterComponent from './components/Footer/Footer';
import HeaderComponent from './components/Header/Header';


export default class App extends Component{
    constructor (props){
        super(props)        
    }
 
    componentWillMount(){
   //   this.checkUserLogin()
    }

  render(){
    return (
      <div>
          <HeaderComponent/>
          <FooterComponent />
      </div>
  )
  }
}
