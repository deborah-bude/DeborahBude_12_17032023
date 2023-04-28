import React from "react";
import PropTypes from "prop-types";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

/**
 *
 * @param { Number } props.score
 * @returns
 */
export default function UserProgression(props) {
	const score = props.score * 100;
	console.log(score)
	const data = [
		{ score: 100, fill: "white", background: "#ffffff" },
		{ score: score, fill: "#FF0000" },
	];

	return (
		<section className="user-data__progression">
			<h2>Score</h2>
			<div className="radial-chart">
				<p className="progression-score">
					<strong>{score}%</strong> <br />
					de votre objectif
				</p>
						<RadialBarChart
							startAngle={90}
							endAngle={460}
							innerRadius={60}
							outerRadius={100}
							barSize={10}
							data={data}
							width={200} height={200}
						>
							<RadialBar background dataKey="score" cornerRadius={100} />
						</RadialBarChart>
			</div>
		</section>
	);
}

UserProgression.propTypes = {
	score: PropTypes.number.isRequired,
};
