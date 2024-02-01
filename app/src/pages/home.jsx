import React from "react";
import "../styles/home.css";
import logo from "../components/assets/logo.jpg";
import pic1 from "../components/assets/pic1.jpg";

import Navbar from "../components/utils/navbar";
import Footer from "./footer";

const Home = () => {
	return (
		<div>
			<div className="navbar container">
				<div className="nav-logo">
					{/* <div className="logo">
						<img src={logo} alt="" id="logo" />
					</div>
					<p>Never Die Broke Invision</p> */}
				</div>
				<Navbar />
			</div>

			<section className="container">
				<div className="hero" id="hero">
					<div className="content">
						<div className="hero-details">
							<div className="left">
								<p className="text-one">Unique Style Only</p>
								<br />
								<br />
								<p className="text-two">
									Finding Your Perfect Items{" "}
								</p>
								<br />
								<p className="text-three">
									At An Affordable Price
								</p>
								<div className="button">
									<button>Shop now</button>
								</div>
							</div>

							<div className="right">
								<img src={pic1} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Home;
