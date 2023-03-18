import React from "react";
import { RadialBarChart, RadialBar, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function UserProgression() {
	const data = {
		id: 18,
		userInfos: {
			firstName: "Cecilia",
			lastName: "Ratorez",
			age: 34,
		},
		score: 0.3,
		keyData: {
			calorieCount: 2500,
			proteinCount: 90,
			carbohydrateCount: 150,
			lipidCount: 120,
		},
	};

	// const data = [
	// 	{
	// 		name: "18-24",
	// 		uv: 31.47,
	// 		pv: 2400,
	// 		fill: "#8884d8",
	// 	},
	// 	{
	// 		name: "25-29",
	// 		uv: 26.69,
	// 		pv: 4567,
	// 		fill: "#83a6ed",
	// 	},
	// 	{
	// 		name: "30-34",
	// 		uv: 15.69,
	// 		pv: 1398,
	// 		fill: "#8dd1e1",
	// 	},
	// 	{
	// 		name: "35-39",
	// 		uv: 8.22,
	// 		pv: 9800,
	// 		fill: "#82ca9d",
	// 	},
	// 	{
	// 		name: "40-49",
	// 		uv: 8.63,
	// 		pv: 3908,
	// 		fill: "#a4de6c",
	// 	},
	// 	{
	// 		name: "50+",
	// 		uv: 2.63,
	// 		pv: 4800,
	// 		fill: "#d0ed57",
	// 	},
	// 	{
	// 		name: "unknow",
	// 		uv: 6.67,
	// 		pv: 4800,
	// 		fill: "#ffc658",
	// 	},
	// ];

	return (
		<section className="user-data__progression">
			<h2>Score</h2>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart innerRadius="70%" outerRadius="80%" barSize={10} data={data}>
					<RadialBar
						minAngle={15}
						label={{ position: "insideStart", fill: "#fff" }}
						background
						clockWise
						dataKey="score"
					/>
				</RadialBarChart>
			</ResponsiveContainer>
		</section>
	);
}
