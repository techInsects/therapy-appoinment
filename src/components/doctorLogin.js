// import React, { Component } from 'react';
//  import axios from 'axios';
//  import { Link } from 'react-router-dom';
//  import ReactDOM from 'react-dom';
// import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
//     Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
//     const loginStyles = {
//         width: "90%",
//         maxWidth: "600px",
//         margin: "20px auto",
//         border: "1px solid #ddd",
//         borderRadius: "5px",
//         padding: "10px"
//       }
   
      
// class doctorLogin extends Component {
// constructor(props) {
//     super(props);

//     this.state = {
//       username: '',
//       password: '',
    
//     };
    
// }

// onSubmit = (e) => {
//     e.preventDefault();

//     const { username, password } = this.state;

//     axios.post('/api/loginDoc', { username, password })
//       .then((result) => {
//         localStorage.setItem('jwtToken', result.data.token);
//         this.setState({ message: '' });
//         this.props.history.push('/doctor')
//       })
//       .catch((error) => {
//         if(error.response.status === 401) {
//           this.setState({ message: 'Login failed. Username or password not match' });
//         }
//       });
//   }

  
//     render() {

//          const { username, password } = this.state;
       
//             return (
//                 <div className="container" style={loginStyles}>
//                   <Form>
//                             <FormGroup>
//                             <h2 className="login">LogIn Doctor</h2>
//                             </FormGroup>
//                             <FormGroup>
//                                 <label htmlFor="username">Username</label>
//                                 <Input type="text" id="username" name="username"  value={username} onChange={this.onChange}/>
//                             </FormGroup>
//                             <FormGroup>
//                                 <label htmlFor="password">Password</label>
//                                 <Input type="password" id="password" name="password" value={password} onChange={this.onChange}/>
//                             </FormGroup>
//                             <FormGroup check>
//                                 <label check> 
//                                 <Input type="checkbox" name="remember"/>
//                                 Remember
//                                 </label>
//                             </FormGroup>
//                             <Button type="submit" value="submit" color="primary">Login</Button>
//                         </Form>
//                 </div>
//             );
        
//           }
// }

// export default doctorLogin;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
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

class doctorLogin extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      message: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    axios.post('/api/loginDoc', { email, password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({ message: '' });
        this.props.history.push('/doctor')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }

  render() {
    const { email, password, message } = this.state;
    return (
      <div class="container">
        <form class="form-signin" onSubmit={this.onSubmit}>
          {message !== '' &&
            <div class="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
          }
          <h2 class="form-signin-heading">Please sign in</h2>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" class="form-control" placeholder="Email address" name="email" value={this.state.email} onChange={this.onChange} required/>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" class="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} required/>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
          <p>
            Not a member? <Link to="/register"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default doctorLogin;
