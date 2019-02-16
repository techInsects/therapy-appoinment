import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,Button,Row,Col} from 'reactstrap'
  class Home extends Component {
    constructor(props) {
        super(props);
       
        
    }
    
    
    
        render() {
           
                return (
                  <div className="container ">
                  <div className="clas">
                   
                   <br/> <br/>
                   <div className="row">
                    <div className="col-sm-3 offset-sm-4">
                      <a href="/teletalk"><Button className="clasbtn" color="secondary">Why TeleTalk</Button></a>
                    </div>
                    <div className="col-sm-2">
                      <a href="/session"><Button className="clasbtn" color="secondary"> Session</Button></a>
                    </div> 
                   </div>
                    <br/>
                    <div className="row">
                    <div className="col-sm-3 offset-sm-4">
                      <a href="/mission"><Button className="clasbtn" color="secondary">Our Mission</Button></a>
                    </div>
                    <div className="col-sm-2">
                      <a href="team"><Button className="clasbtn" color="secondary">Meet Our team</Button></a>
                    </div> 
                   </div>
                    <br/>
                    <div className="row">
                    <div className="col-sm-3 offset-sm-4">
                      <a href="/eBook"><Button className="clasbtn" color="secondary">eBook</Button></a>
                    </div>
                    <div className="col-sm-2">
                      <a href="activity"><Button className="clasbtn" color="secondary">Activities</Button></a>
                    </div> 
                   </div>
                    <br/>
                    <h2 className="test">CLIENTS TESTIMONIALS</h2>
            
                    <div className="row">
                <div className="col-md-4">
                  <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    
              <div className="carousel-inner">
                      <div className="item carousel-item active">
                        <div className="img-box"><img src="/" alt=""/></div>
                        <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                        <p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
                      </div>
                    
                    </div>
                    </div>
                </div>
            
                <div className="col-md-4">
                  <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    
              <div className="carousel-inner">
                      <div className="item carousel-item active">
                        <div className="img-box"><img src="/" alt=""/></div>
                        <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                        <p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
                      </div>
                    
                    </div>
                    </div>
                </div>
                
            
                <div className="col-md-4">
                  <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    
              <div className="carousel-inner">
                      <div className="item carousel-item active">
                        <div className="img-box"><img src="/" alt=""/></div>
                        <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                        <p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
                      </div>
                    
                    </div>
                    </div>
                </div>
                
                    
                
              </div>
                </div>   
              
            </div>
                );
            
              }
    }


  
 
    
export default Home;  