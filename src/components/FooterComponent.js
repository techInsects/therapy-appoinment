import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                        <div className="row">
                          <div className="col-sm-6">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/teletalk'>Why TeleTalk?</Link></li>
                            <li><Link to='/session'>Session</Link></li>
                            <li><Link to='/ebook'>eBook/Tutorial</Link></li>
                          </div>
                          <div className="col-sm-6">
                            <li><Link to='/activity'>Activities</Link></li>
                            <li><Link to='/team'>Team</Link></li>
                            <li><Link to='/mission'>Mission</Link></li>
                            <li><Link to='/contactus'>Contact Us</Link></li>
                            <li><Link to='/contactus'>Vizz</Link></li>
                          </div> 
                        </div>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-4">
                        <h5>Our Address</h5>
                        <address>
                        Combined Miltry Hospital<br />
                        Rawalpindi<br />
                        <i className="fa fa-phone fa-lg"></i>: +92330005555<br />
                        <i className="fa fa-fax fa-lg"></i>: +92330005555<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                            confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2018 EdunSkills</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;