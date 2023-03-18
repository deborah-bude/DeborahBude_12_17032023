import React from "react";
import {
	RadarChart,
	Radar,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Legend,
	ResponsiveContainer,
} from "recharts";

export default function UserPerformance() {
	const kind = {
		1: "cardio",
		2: "energy",
		3: "endurance",
		4: "strength",
		5: "speed",
		6: "intensity",
	};
	const data = [
		{
			value: 80,
			kind: 1,
		},
		{
			value: 120,
			kind: 2,
		},
		{
			value: 140,
			kind: 3,
		},
		{
			value: 50,
			kind: 4,
		},
		{
			value: 200,
			kind: 5,
		},
		{
			value: 90,
			kind: 6,
		},
	];
	return (
		<section className="user-data__performance">
			<ResponsiveContainer width="100%" height={250}>
				<RadarChart outerRadius={90} data={data}>
					<PolarGrid />
					<PolarAngleAxis dataKey="kind.0" />
					<PolarRadiusAxis angle={30} domain={[0, 200]} />
					<Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
				</RadarChart>
			</ResponsiveContainer>
		</section>
	);
}
