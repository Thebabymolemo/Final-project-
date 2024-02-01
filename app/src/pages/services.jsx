import React from "react";
import "../styles/sevices.css";
import Footer from "./footer";
import Navbar from "../components/utils/navbar";

const Services = () => {
	return (
		<div>
			<Navbar />
			<section className="services container" id="services">
				<div class="content">
					<div class="title">Our Services</div>
					<div className="first">
						At NEVER DIE BROKE INVISIONS,we pride ourselves on
						delivering fashion that goes beyond the ordinary.Our
						commitment to excellence is reflected in every stitch,
						fabric choice and design detail. Here's why our quality
						products stand out:
					</div>
					<div class="boxes">
						<div class="box">
							<div class="topic">Diverse Collection</div>
							<p>
								Explore our extensive range of clothing,trending
								hoodies,comfortable beanies,elegant T-shirts and
								other accessories.We curate our collection to
								cater various styles and all preferences.
							</p>
						</div>
						<div class="box">
							<div class="topic">Vibrant Colour options</div>
							<p>
								Express yourself with our variety of colour
								options.Our products come in a spectrum of hues,
								and we strive to represent colors accuately in
								our images.
							</p>
						</div>
						<div class="box">
							<div class="topic">Quality Products</div>
							<p>
								We priortize quality materials to ensure your
								clothing is not only fashionable but also
								comfortable.We source only finnest materials to
								ensure your comfort and satisfaction,from
								luxurious fabrics to durabale embellishment.Our
								products are chosen with both style and
								longevity in mind.
							</p>
						</div>
						<div class="box">
							<div class="topic">Fit Perfection</div>
							<p>
								Embrace the confidence that comes with a perfect
								fit.Our dedication to sizing accuracy and
								inclusive opptions ensures that everyone can
								fiind their ideal style and fit.Invest in
								clothing that lasts longer.
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

export default Services;
