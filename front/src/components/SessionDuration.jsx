import React from "react";
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

export default function sessionDuration() {
	const sessions = [
		{
			day: 1,
			sessionLength: 30,
		},
		{
			day: 2,
			sessionLength: 23,
		},
		{
			day: 3,
			sessionLength: 45,
		},
		{
			day: 4,
			sessionLength: 50,
		},
		{
			day: 5,
			sessionLength: 0,
		},
		{
			day: 6,
			sessionLength: 0,
		},
		{
			day: 7,
			sessionLength: 60,
		},
	];
	return (
		<section className="user-data__duration">
			<h2>Durée moyenne des sessions</h2>
			<ResponsiveContainer width="100%" height={250}>
				<LineChart data={sessions} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="day" />
					<YAxis />
					<Tooltip />
					<Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
				</LineChart>
			</ResponsiveContainer>
		</section>
	);
}
