import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
    const loginStyles = {
        width: "90%",
        maxWidth: "600px",
        margin: "20px auto",
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "10px"
      }
      
class Registration extends Component {
constructor(props) {
    super(props);

     this.state = {
      username: '',
      password: '',
      phone:'',
      email:''
    };
    
}

onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password, email, phone } = this.state;

    axios.post('/api/register', { username, password, email, phone })
      .then((result) => {
        this.props.history.push("/login")
      });
  }
  
    render() {

         const { username, password, email, phone } = this.state;
       
            return (
                <div className="container" style={loginStyles}>
                  <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                            <h2 className="login">Registration</h2>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="username">Username</label>
                                <Input type="text" id="username" name="username" value={username} onChange={this.onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="username">Email</label>
                                <Input type="text" id="email" name="email" value={email} onChange={this.onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="username">Phone Np.</label>
                                <Input type="text" id="phone" name="phone" value={phone} onChange={this.onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="password">Password</label>
                                <Input type="password" id="password" name="password" value={password} onChange={this.onChange}/>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                </div>
            );
        
          }
}

export default Registration;