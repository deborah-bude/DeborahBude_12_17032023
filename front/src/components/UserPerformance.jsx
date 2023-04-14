import React from "react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

export default function UserPerformance(data) {
	if (!data) {
		return null;
	}

	const performance = data.dataPerformance.data.map((data) => {
		let kind;
		const value = data.value;
		const dictionary = {
			1: "cardio",
			2: "energy",
			3: "endurance",
			4: "strength",
			5: "speed",
			6: "intensity",
		};

		kind = dictionary[data.kind];

		return { value: value, kind: kind };
	});

	return (
		<section className="user-data__performance">
			<ResponsiveContainer width="100%" height={250}>
				<RadarChart startAngle={210} endAngle={570} outerRadius={90} data={performance}>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis dataKey="kind" fill="#FF0101" />
					<Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
				</RadarChart>
			</ResponsiveContainer>
		</section>
	);
}
