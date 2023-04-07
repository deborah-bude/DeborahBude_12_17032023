import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { userAverageSessions } from "../fetchAPI";

export default function SessionDuration(user) {
	const [dataAverageSessions, setDataAverageSessions] = useState();
	useEffect(() => {
		userAverageSessions(user.id).then((fetchSessionInfos) => {
			setDataAverageSessions(fetchSessionInfos.data.sessions);
		});
	}, []);

	const CustomizedDot = (props) => {
		const { cx, cy } = props;
		return (
			<svg
				className="session-duration_activeDot"
				x={cx - 5}
				y={cy - 5}
				width={10}
				height={10}
				fill="white"
				viewBox="0 0 150 150"
			>
				<circle cx="71.451" cy="71.355" r="71.26" />
			</svg>
		);
	};

	return (
		<section className="user-data__duration">
			<h2>Durée moyenne des sessions</h2>
			<ResponsiveContainer width="100%" height={250}>
				<LineChart data={dataAverageSessions}>
					<XAxis dataKey="day" stroke="#ffffff" />
					<Tooltip
						formatter={(value, name) => [`${value} min`]}
						labelStyle={{ display: "none" }}
						itemStyle={{ color: "#000000", fontWeight: "700" }}
					/>
					<Line
						type="monotone"
						dataKey="sessionLength"
						stroke="#ffffff"
						dot={false}
						activeDot={<CustomizedDot />}
					/>
				</LineChart>
			</ResponsiveContainer>
		</section>
	);
}
