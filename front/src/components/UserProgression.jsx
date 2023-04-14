import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

export default function UserProgression(user) {
	const score = user.score * 100;
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
				<ResponsiveContainer width="100%" height={250}>
					<RadialBarChart
						startAngle={90}
						endAngle={460}
						innerRadius={95}
						outerRadius={120}
						barSize={10}
						data={data}
					>
						<RadialBar background dataKey="score" cornerRadius={100} />
					</RadialBarChart>
				</ResponsiveContainer>
			</div>
		</section>
	);
}
