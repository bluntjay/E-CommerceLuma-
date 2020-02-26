import React, {Component} from "react";
import {Container} from 'react-bootstrap';

export default class Footer extends Component{
	render(){
		return(
			<Container className="footer">
					<div className="eachList"> 
					<ul className="footList">
						<a className="footerLink" href="https://www.ecomplete.co.za/about-us/"><li>About Us</li></a>
						<a className="footerLink" href="https://www.ecomplete.co.za/blog/"><li>Blog</li></a>
					</ul>
				</div>
					<div className="eachList">
					<ul className="footList">
						<a className="footerLink" href="https://www.ecomplete.co.za/contact-us/"><li>Contact Us</li></a>
						<a className="footerLink" href="https://www.ecomplete.co.za/pricing/"><li>Orders & Returns</li></a>
						<a className="footerLink" href="https://www.ecomplete.co.za/brands/"><li>Brands</li></a>
						<a className="footerLink" href=""><li>Advance Serach</li></a>
					</ul>
				</div>
					<div className="eachList">
					<ul className="footList">
						<a className="footerLink" href="https://twitter.com/ecom_plete"><li>Twitter  <i className="fab fa-twitter"></i></li></a>
						<a className="footerLink" href="https://web.facebook.com/ecompleteza/?_rdc=1&_rdr"><li>Facebook  <i className="fab fa-facebook"></i></li></a>
						<a className="footerLink" href="https://web.facebook.com/ecompleteza/?_rdc=1&_rdr"><li>Instagram  <i className="fab fa-instagram"></i></li></a>
						<a className="footerLink" href="https://web.facebook.com/ecompleteza/?_rdc=1&_rdr"><li>LinkedIn  <i className="fab fa-linkedin"></i></li></a>
					</ul>
				</div>
			</Container>
			)
	}
}
