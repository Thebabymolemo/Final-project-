import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';

const Navbar = () => {
	return (
		<div className="nav-menu container">
			<div className="logo">
				<img src={logo} alt="" id="logo" />
				</div>
				<p>Empress Royal</p>
			<ul>
				<li>
					<Link className="link" to="/">
						Home
					</Link>
					<Link className="link" to="/about">
						About
					</Link>
					<Link className="link" to="/gallery">
						Gallery
					</Link>
					<Link className="link" to="/services">
						Services
					</Link>
					<Link className="link" to="/reviews">
						Reviews
					</Link>
					<Link className="link" to="/contact">
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
