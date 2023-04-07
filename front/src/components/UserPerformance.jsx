import React, { useEffect, useState } from "react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { userPerformance } from "../fetchAPI";

export default function UserPerformance(user) {
	const [dataPerformance, setDataPerformance] = useState();
	useEffect(() => {
		userPerformance(user.id).then((fetchPerformance) => {
			setDataPerformance(fetchPerformance.data);
		});
	}, []);

	if (!dataPerformance) {
		return null;
	}

	const performance = dataPerformance.data.map((data) => {
		let kind;
		const value = data.value;

		if (dataPerformance.kind[data.kind] === "energy") {
			kind = "Énergie";
		} else if (dataPerformance.kind[data.kind] === "endurance") {
			kind = "Endurance";
		} else if (dataPerformance.kind[data.kind] === "cardio") {
			kind = "Cardio";
		} else if (dataPerformance.kind[data.kind] === "speed") {
			kind = "Vitesse";
		} else if (dataPerformance.kind[data.kind] === "strength") {
			kind = "Force";
		} else if (dataPerformance.kind[data.kind] === "intensity") {
			kind = "Intensité";
		} else {
			kind = "Autre";
		}

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
