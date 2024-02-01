import React from "react";
import "../styles/gallery.css";
import skullpic1 from "../components/assets/skullpic1.jpg";
import rivalry from "../components/assets/rivalry.jpg";
import neverdiebroke from "../components/assets/neverdiebroke.jpg";
import rivallry2 from "../components/assets/rivallry2.jpg";
import skullsnake from "../components/assets/skullsnake.jpg";
import findyourpurpose2 from "../components/assets/findyourpurpose2.jpg";
import safaricap from "../components/assets/safaricap.jpg";
import panelcap from "../components/assets/panelcap.jpg";
import beanie from "../components/assets/beanie.jpg";
import beanie2 from "../components/assets/beanie2.jpg";
import beanie3 from "../components/assets/beanie3.jpg";
import hoodies from "../components/assets/hoodies.jpg";
import Footer from "./footer";

import Navbar from "../components/utils/navbar";

const Gallery = () => {
	return (
		<div>
			<Navbar />
			<div className="gallery_main container">
				<div className="gallery">Our Gallery</div>
				<div className="trending">
					<div className="trend_container">
						<div className="left_box">
							<div className="header">
								<div className="heading">
									<h2>Now Featured Top Selling Products</h2>
								</div>
							</div>
							<div className="product">
								<div className="grid-container">
									<div className="grid-item">
										<div className="pic1">
											<img src={skullpic1} alt="" />
											<p>Never Die Broke Invisions</p>
											<p>Skull Snake Black T-shirt</p>
											<p>R280</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic2">
											<img src={rivalry} alt="" />
											<p>Never Die Broke Invisions</p>
											<p>Rivalry IV White T-shirt</p>
											<p>R250</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic3">
											<img src={neverdiebroke} alt="" />
											<p>Never Die Broke Invisions</p>
											<p>White T-shirt</p>
											<p>R250</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic4">
											<img src={rivallry2} alt="" />
											<p>Never Die Broke Invisions</p>
											<p>Rivalry IV Black T-shirt</p>
											<p>R250</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic5">
											<img src={skullsnake} alt="" />
											<p>Never Die Broke Invisions</p>
											<p>Skull Snake White T-shirt</p>
											<p>R280</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic6">
											<img
												src={findyourpurpose2}
												alt=""
											/>
											<p>Never Die Broke Invisions</p>
											<p>
												Find Your Purpose White T-shirt
											</p>
											<p>R230</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic7">
											<img src={safaricap} alt="" />
											<p>Never Die Broke Invisions</p>
											<p>Safari Hat</p>
											<p>R180</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic8">
											<img src={panelcap} alt="" />
											<p>Never Die Broke Invisions</p>
											<p>Panel Cap</p>
											<p>R180</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic9">
											<img src={beanie} alt="" />
											<p>Never Die Broke Invisions</p>
											<p>Black and Orange Beanies</p>
											<p>R90 each</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic10">
											<img src={beanie2} alt="" />
											<p>Never Die Broke Invisions</p>
											<p>White Beanie</p>
											<p>R90</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic11">
											<img src={beanie3} alt="" />
											<p>Never Die Broke Invisions</p>
											<p>Skyblue Beanie</p>
											<p>R90</p>
										</div>
									</div>
									<div className="grid-item">
										<div className="pic12">
											<img src={hoodies} alt="" />
											<p>Never Die Broke Invisions</p>
											<p>Black and Orange Hoodies</p>
											<p>R350 each</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Gallery;
