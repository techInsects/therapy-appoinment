import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeCompoment';
import contact from './contactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import teletalk from './whyteletalkcomponent';
import session from './session';
import ebook from './ebookComponent';
import activity from './activityComponent';
import team from './teamComponent';
import mission from './missionComponent';
import Slider from './slider';
import Login from './Login';
import Registration from './registration';
import patient from './patient';

import doctorLogin from './doctorLogin';
import doctor from './doctor';
import RegistrationDoc from './doctorRegistration';
import Show from './Show';




class Main extends Component {
constructor(props) {
  super(props);
  
}






  render() {
    const HomePage = () => {
      return(
            <Home />
            
            
        );
       
    }

    return (
      <div>      
        {/* <Header />  
        <Slider/>
        <Switch> */}
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/contactus" component={contact}/>
          <Route exact path="/teletalk" component={teletalk}/>
          <Route exact path="/session" component={session}/>
          <Route exact path="/ebook" component={ebook}/>
          <Route exact path="/activity" component={activity}/>
          <Route exact path="/team" component={team}/>
          <Route exact path="/mission" component={mission}/>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Registration" component={Registration}/>
          <Route exact path="/patient" component={patient}/>
           <Route path='/show/:id' component={Show} />
          <Route exact path="/doctor" component={doctor}/>
          <Route exact path="/doctorLogin" component={doctorLogin}/>
          <Route exact path="/RegistrationDoc" component={RegistrationDoc}/>
          <Redirect to="/home" />

        {/* </Switch>
        <Footer /> */}
      </div>
    );
  }
}

export default Main;
