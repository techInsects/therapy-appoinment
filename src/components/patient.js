import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Select from 'react-select';
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

      const books = [];
      
class Patient extends Component {
constructor(props) {
    super(props);

     this.state = {
      username: '',
      email:'',
      message:'',
      books: [],
      number:'',
    address:'',
    session_name:'',
    session_date:'',
    session_time:'',
    };
    
}


componentDidMount() {
 
    axios.get('/api/getDoctor')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, email, message,number,address,session_name,session_date,session_time } = this.state;

    axios.post('/api/addPatient', { username, email,number,address,session_name,session_date,session_time })
      .then((result) => {
        this.setState({ message: 'Your appointment has been booked' });
        //this.props.history.push("/login")
        this.setState({
            username: '',
            email:'',
            number:'',
            address:'',
            session_name:'',
            session_date:'',
            session_time:'',
        })
      });
  }
    logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
    this.props.history.push("/login")
  }
  
    render() {

        // let optionItems = this.state.books.map((data) =>
        //         <option key={data.username}>{data.username}</option>
        //     );

         const { username, email, message,number,address,session_name,session_date,session_time } = this.state;
       
            return (

                
                <div className="container" style={loginStyles}>

                    {message !== '' &&
                        <div class="alert alert-warning alert-dismissible" role="alert">
                        { message }
                        </div>
                    }
                
                {localStorage.getItem('jwtToken') &&
                    <button class="btn btn-primary" onClick={this.logout}>Logout</button>
                }
                  <Form onSubmit={this.onSubmit}>
                    
                            <FormGroup>
                            <h2 className="login">Book Appointment</h2>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="username">Name</label>
                                <Input type="text" id="username" name="username" value={username} onChange={this.onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="username">Email</label>
                                <Input type="text" id="email" name="email" value={email} onChange={this.onChange}/>
                            </FormGroup>

                            <FormGroup>
                                <label htmlFor="username">Contact Number</label>
                                <Input type="text" id="number" name="number" value={number} onChange={this.onChange}/>
                            </FormGroup>

                            <FormGroup>
                                <label htmlFor="username">Postal Address</label>
                                <Input type="text" id="address" name="address" value={address} onChange={this.onChange}/>
                            </FormGroup>

                            <FormGroup>
                                <label htmlFor="username">Session Name</label>
                                <Input type="text" id="message" name="session_name" value={session_name} onChange={this.onChange}/>
                            </FormGroup>

                             <FormGroup>
                                <label htmlFor="username">Session Date</label>
                                <Input type="text" id="message" name="session_date" value={session_date} onChange={this.onChange}/>
                            </FormGroup>

                            <FormGroup>
                                <label htmlFor="username">Session Time</label>
                                <Input type="text" id="message" name="session_time" value={session_time} onChange={this.onChange}/>
                            </FormGroup>

                            


                            {/* <FormGroup>
                                <label htmlFor="username">Select Doctor</label>
                                     <select>
                                        {optionItems}
                                    </select>
                            
                                
                            </FormGroup> */}
                         
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </Form>
                </div>
            );
        
          }
}

export default Patient;