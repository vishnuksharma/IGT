import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import User from '../components/User/User';


export default class RouterComponent extends Component{
    constructor(props){
        super(props);
    }

    componentDidUpdate(){
        console.log('here');
    }

    render(){
        return(

            <main className="component-wrapper bg-light">
                <Route path="/" component={User} />
            </main>
        )
    }
}
  