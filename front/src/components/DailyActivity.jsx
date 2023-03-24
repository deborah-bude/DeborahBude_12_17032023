import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts";
import { getData, userData, userActivity, userAverageSessions, userPerformance } from "../fetchAPI";

const data = userData("12");
console.log(data);
// console.log(userActivity("12"));
// console.log(userAverageSessions("12"));
// console.log(userPerformance("12"));

export default function dailyActivity() {
	const sessions = [
		{
			day: "2020-07-01",
			kilogram: 80,
			calories: 240,
		},
		{
			day: "2020-07-02",
			kilogram: 80,
			calories: 220,
		},
		{
			day: "2020-07-03",
			kilogram: 81,
			calories: 280,
		},
		{
			day: "2020-07-04",
			kilogram: 81,
			calories: 290,
		},
		{
			day: "2020-07-05",
			kilogram: 80,
			calories: 160,
		},
		{
			day: "2020-07-06",
			kilogram: 78,
			calories: 162,
		},
		{
			day: "2020-07-07",
			kilogram: 76,
			calories: 390,
		},
	];
	return (
		<section className="user-data__daily">
			<h2>Activité quotidienne</h2>
			<ResponsiveContainer width="100%" height={250}>
				<BarChart data={sessions}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="day" />
					<YAxis dataKey="calories" />
					<Legend verticalAlign="top" align="right" iconType="circle" iconSize="6" />
					<Bar dataKey="kilogram" fill="#282D30" barSize={7} />
					<Bar dataKey="calories" fill="#E60000" barSize={7} />
				</BarChart>
			</ResponsiveContainer>
		</section>
	);
}
