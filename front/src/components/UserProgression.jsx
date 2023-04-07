import React, { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { userData } from "../fetchAPI";

export default function UserProgression(user) {
	const [UserScore, setUserScore] = useState();
	useEffect(() => {
		userData(user.id).then((fetchUserScoreInfos) => {
			setUserScore(fetchUserScoreInfos.data.todayScore);
		});
	}, []);

	const score = UserScore * 100;
	const data = [
		{ score: 100, fill: "white" },
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
