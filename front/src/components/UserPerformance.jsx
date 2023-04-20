import React from "react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

/**
 *
 * @param { Object } data.dataPerformance
 * @returns
 */
export default function UserPerformance(data) {
	const performance = data.dataPerformance.data.map((data) => {
		let kind;
		const value = data.value;

		const dictionary = {
			1: "Cardio",
			2: "Energie",
			3: "Endurance",
			4: "Force",
			5: "Vitesse",
			6: "Intensité",
		};

		kind = dictionary[data.kind];

		return { value: value, kind: kind };
	});

	return (
		<section className="user-data__performance">
			<ResponsiveContainer width="100%" height={250}>
				<RadarChart
					// barCategoryGap="10px"
					// barGap={5}
					startAngle={210}
					endAngle={570}
					outerRadius={63}
					data={performance}
				>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis dataKey="kind" fill="#FF0101" />
					<Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
				</RadarChart>
			</ResponsiveContainer>
		</section>
	);
}
