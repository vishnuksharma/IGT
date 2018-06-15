import React, { Component } from 'react';
import 'whatwg-fetch';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserfetch: false
    };

    this.getUser = this.getUser.bind(this);
    
  }

  // componentDidMount() {
  //   fetch('/api/users')
  //     .then(res =>  res.json())
  //     .then(json => {
  //       // console.log(json)
  //       this.setState({
  //         users: json
  //       });
  //     });
  // }

  getUser() {
    fetch('/api/getuser')
      .then(res =>  res.json())
      .then(json => {
        // console.log(json)
        this.setState({
          username: json.name,
          type: json.type,
          country: json.country,
          isUserfetch: true
        });
      });
  }
  getCheckBox(type){
    
      return (        
        <div>
          <input onChange={(event) => {
          this.setState ({type: event.target.value })}} type="radio" name="type" value="consulant" checked={type == 'consulant'} />&nbsp;Consulant &nbsp;&nbsp;&nbsp;
          <input onChange={(event) => {
          this.setState ({type: event.target.value })}} type="radio" name="type" value="permanent" checked={type == 'permanent'} />&nbsp;Permanent
        </div>
      )
    }

  getUserDetailHtml(status){
    if (status) {
      return (
        <div className="containerForm">
          <form action="/action_page.php">
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Name</label>
              </div>
              <div className="col-75">
                <input value={this.state.username || ''} type="text" name="username" placeholder="Your name.." onChange={(event) => {
          this.setState ({username: event.target.value })}} />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="subject">Type of Contract</label>
              </div>
              <div className="col-75">
                {this.getCheckBox(this.state.type)} 
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="country">Country</label>
              </div>
              <div className="col-75">
                <select id="country" name="country" value={this.state.country}>
                  <option value="australia">Australia</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
            </div>
            
          </form>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="container bg-light">
        <div className="btn-wrapper">
         <button className="btn btn-primary" onClick={this.getUser}>Show User Detail</button>
        </div>    
        {this.getUserDetailHtml(this.state.isUserfetch)}
      
      </div>
    );
  }
}

export default User;
