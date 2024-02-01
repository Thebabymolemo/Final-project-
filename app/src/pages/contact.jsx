import React from "react";
import "../styles/contact.css";
import {
	RiFacebookCircleFill,
	RiInstagramFill,
	RiWhatsappFill,
	RiPhoneFill,
	RiPlaneFill,
} from "react-icons/ri";
import Footer from "./footer";
import Navbar from "../components/utils/navbar";

const Contact = () => {
	return (
		<div>
			<nav>
				<Navbar />
			</nav>
			<section className="contact container">
				<h1 className="contact-title">Contact Us</h1>
				<div className="contact-details">
					<div className="text">
						<div className="text-one">
							<p className="first">Thank you for choosing Us!</p>
							<p className="second">
								We're here to assist you. <br /> Feel free to reach out
								to us using the following contact options:
							</p>
							<p className="third">
								Have a specific question or inquiry?
								<br /> Fill out the form, and we'll get back to
								you as soon as possible..
							</p>
						</div>
						<div className="text-two">
							<p className="fourth">Locate Us @:</p>
							<div className="address">
								<p className="fifth">
									4 Myrtle Street <br /> Protea Glen Ext 12{" "}
									<br /> 1818
								</p>
							</div>
							<div className="contact-link">
								<h3>Find us @</h3>
								<div className="contact_container">
									<li className="clicks">
										<a href="/">
											<RiFacebookCircleFill />
											Never Die Broke Invisions
										</a>
									</li>
									<li className="clicks">
										<a href="/">
											<RiInstagramFill />
											Never Die Broke Invisions
										</a>
									</li>
									<li className="clicks">
										<a href="/">
											<RiWhatsappFill />
											079-755-1982
										</a>
									</li>
									<li className="clicks">
										<a href="/">
											<RiPhoneFill />
											079-755-1982
										</a>
									</li>
								</div>
							</div>
						</div>
						<div className="text-three">
							<span>Mail us @</span>
							<br />
							<a href="/">sibekoharriet89@gmail.com</a>
						</div>
					</div>
					<div className="table">
						<div className="table-topic">
							Send us a message <RiPlaneFill />
						</div>
						<form action="/handling-form-page" method="post">
							<input
								className="nam"
								type="text"
								name=""
								id=""
								placeholder="Fullname"
							/>
							<input
								className="em"
								type="email"
								name=""
								id=""
								placeholder="Email address"
							/>
							<input
								className="sub"
								type="text"
								name=""
								id=""
								placeholder="Subject"
							/>
							<input
								className="mess"
								type="text"
								name=""
								id=""
								placeholder="Message"
							/>
							<div className="contact-button button">
								<button type="submit">send message</button>
							</div>
						</form>
					</div>
				</div>
			</section>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Contact;
