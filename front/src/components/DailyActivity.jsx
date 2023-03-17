import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

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
		<section>
			<h2>Activité quotidienne</h2>
			<div className="graphic-legend">
				<p className="graphic-legend--weight">Poids (kg)</p>
				<p className="graphic-legend--calories">Calories brûlées (kCal)</p>
			</div>
			<BarChart width={730} height={250} data={sessions}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="day" />
				<YAxis dataKey="calories" />
				<Tooltip />
				<Legend verticalAlign="top" align="right" iconType="circle" iconSize="6" />
				<Bar dataKey="kilogram" fill="#282D30" />
				<Bar dataKey="calories" fill="#E60000" />
			</BarChart>
		</section>
	);
}
