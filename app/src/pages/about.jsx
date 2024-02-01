import React from "react";
import "../styles/about.css";
import pic3 from "../components/assets/pic3.jpg";
import Footer from "./footer";
import Navbar from "../components/utils/navbar";

const About = () => {
	return (
		<div>
			<Navbar />
			<section className="about container" id="about">
				<div className="content">
					<div className="title">
						<span>About us</span>
					</div>
					<div className="about-details">
						<div className="image">
							<img src={pic3} alt="" id="logo" />
						</div>
						<div className="right">
							<div className="topic">
								Never Die Broke Invision
							</div>
							<br />
							<br />
							<p>
								Never Die Broke Invisions Clothing(SA) was
								founded on May 31,2023.It is situated in Protea
								Glen ext 12,Soweto.The brand is crafted for for
								risilient entrepreneurs and hustlers who
								persevere in their pursuits, as well individuals
								committed to ensuring they never experience
								financial hardships in other words (THEY NEVER
								DIE BROKE).Operating daily,except on Sundays and
								public hoidays, the brand embodies the spirit of
								determination.
							</p>
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

export default About;
