import React from "react";
import "../styles/reviews.css";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import z from "../components/assets/z.jpg";
import k from "../components/assets/k.jpg";
import si from "../components/assets/si.jpg";
import Footer from "./footer";
import Navbar from "../components/utils/navbar";

const Reviews = () => {
	return (
		<div>
			<Navbar />
			<section className="review container" id="review">
				<div className="middle-text">
					<h4>Our Customers</h4>
					<h2>Clients Reviews About Our Products</h2>
				</div>

				<div className="review-content">
					<div className="box">
						<p>
							I enjoyed shopping at Empress Royal as they offer quality products.
							It is more like quality over quantity.
							
						</p>
						<div className="in-box">
							<div className="bx-img">
								<img src={z} alt="" />
							</div>
							<div className="bxx-text">
								<h4>phumeza lukele</h4>
								<h5>Clothing Vlogger</h5>
								<div className="ratings">
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="box">
						<p>
							The ording process was smooth and my items arrived
							promptly.The fit was mostly accurate and all
							concerns were quickly addressed. While my overall
							experience was excellenct,a small hiccup prevented
							me from giving a full 5 star,nonetheless I highy
							recommend brand for their fashion-forward styles and
							committment
						</p>
						<div className="in-box">
							<div className="bx-img">
								<img src={k} alt="" />
							</div>
							<div className="bxx-text">
								<h4>Nobuntu Cele</h4>
								<h5>Content Creator</h5>
								<div className="ratings">
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarHalfFill />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="box">
						<p>
							Absolutely love the fabric used,impeccable
							quality,trendy styles and fantastic service.Can't
							get enough of it!!
						</p>
						<div className="in-box">
							<div className="bx-img">
								<img src={si} alt="" />
							</div>
							<div className="bxx-text">
								<h4>Bazo Zulu </h4>
								<h5>Journalist</h5>
								<div className="ratings">
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
									<a href="/">
										<RiStarFill />
									</a>
								</div>
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

export default Reviews;
