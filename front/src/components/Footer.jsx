import React from "react";
import bike from "../assets/bike.svg";
import meditation from "../assets/meditation.svg";
import musculation from "../assets/musculation.svg";
import swim from "../assets/swim.svg";
export default function Footer() {
	return (
		<footer className="pied-page">
			<ul>
				<li className="pied-page__link">
					<img src={meditation} alt="Méditation" />
				</li>
				<li className="pied-page__link">
					<img src={swim} alt="Natation" />
				</li>
				<li className="pied-page__link">
					<img src={bike} alt="Vélo" />
				</li>
				<li className="pied-page__link">
					<img src={musculation} alt="Musculation" />
				</li>
			</ul>
			<p>Copyright, SportSee 2020</p>
		</footer>
	);
}
