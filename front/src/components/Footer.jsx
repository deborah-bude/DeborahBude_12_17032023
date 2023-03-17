import bike from "../assets/bike.svg";
import meditation from "../assets/meditation.svg";
import musculation from "../assets/musculation.svg";
import swim from "../assets/swim.svg";
export default function Footer() {
	return (
		<footer className="pied-page">
			<ul>
				<li>
					<img src={meditation} alt="Méditation" />
				</li>
				<li>
					<img src={swim} alt="Natation" />
				</li>
				<li>
					<img src={bike} alt="Vélo" />
				</li>
				<li>
					<img src={musculation} alt="Musculation" />
				</li>
			</ul>
			<p>Copyright, SportSee 2020</p>
		</footer>
	);
}
