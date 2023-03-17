import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

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
		<section>
			<h2>Durée moyenne des sessions</h2>
			<LineChart
				width={730}
				height={250}
				data={sessions}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="day" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
			</LineChart>
		</section>
	);
}
