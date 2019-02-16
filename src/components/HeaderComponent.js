import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import fire from './fire';

class Header extends Component {
    constructor(props) {
        super(props);
       
        this.toggleNav = this.toggleNav.bind(this);
        
      

        this.state = {
          isNavOpen: false,
         
         
          
        };
      }
     
  
     

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      
     // handleRegisteration(event) {
     //   this.toggleModal();
       // alert("Name : " + this.name.value + "Email : " + this.email.value + " Password: " + this.password.value + " Phone No.(xxxx-xxxxxxx): " + this.phonenum,value);
        //event.preventDefault();
    //}


    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logon.png' height="50" width="100" alt='Ristorante Con Fusion' /></NavbarBrand>&nbsp;&nbsp;&nbsp;
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>

                            

                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="link">Home</span></NavLink>
                            </NavItem>


                            



                            <NavItem>
                                <NavLink className="nav-link" to='/teletalk'><span className="link">Why Tele Talk?</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/session'><span className="link">Session</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/ebook'><span className="link">eBook/Tutorials</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/activity'><span className="link">Activities</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/team'><span className="link">Team</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/mission'><span className="link">Mission</span></NavLink>
                            </NavItem>


                            


                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="link">Contact Us</span></NavLink>
                            </NavItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            
                            

                           


                            

                            <NavItem>
                                <div class="dropdown">
                                    <button class="dropbtn">Theripist</button>
                                    <div class="dropdown-content">
                                        <NavLink className="nav-link" to='/doctorLogin'><span className="link">DoctorLogin</span></NavLink>
                                        <NavLink className="nav-link" to='/RegistrationDoc'><span className="link">Doctor Registration</span></NavLink> 
                                    </div>
                                </div> 
                            </NavItem>


                            


                               <NavItem>
                                    <div class="dropdown">
                                        <button class="dropbtn">Patient</button>
                                        <div class="dropdown-content">
                                            <NavLink className="nav-link" to='/login'><Button><span className="fa fa-sign-in fa-lg ">Login</span></Button></NavLink>
                                            <NavLink className="nav-link" to='/Registration'><Button><span className="fa fa-sign-in fa-lg" >Registration</span></Button></NavLink>
                                        </div>
                                    </div>
                                </NavItem>

                            </Nav>
                           
                        </Collapse>
                    </div>
                </Navbar>
               
                   
            </React.Fragment>
            
        )
    }
}

export default Header;