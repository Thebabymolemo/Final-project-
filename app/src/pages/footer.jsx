import React from "react";
import "../styles/footer.css";
import {
	RiFacebookCircleFill,
	RiInstagramFill,
	RiWhatsappFill,
	RiPhoneFill,
} from "react-icons/ri";

const Footer = () => {
	return (
		<div>
			<footer>
				<div className="click">
					<div className="container">
						{/* href='https://www.facebook.com/profile.php?id=100092868053688&mibextid=LQQJ4d' */}
						<li className="clicks">
							<a href="/">
								<RiFacebookCircleFill />
							</a>
						</li>
						{/* href='https://www.instagram.com/never.die.broke.iv_?igsh=enlwdHlneHdzemQ2' */}
						<li className="clicks">
							<a href="/">
								<RiInstagramFill />
							</a>
						</li>
						<li className="clicks">
							<a href="/">
								<RiWhatsappFill />
							</a>
						</li>
						<li className="clicks">
							<a href="/">
								<RiPhoneFill />
							</a>
						</li>
					</div>
					<div class="text">
						<span>
							Created By <a href="/">S.H_Sibeko</a> | &#169; 2023
							All Rights Reserved
						</span>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
