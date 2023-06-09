import PropTypes from "prop-types";
import {
	BarChart,
	Bar,
	CartesianGrid,
	Tooltip,
	XAxis,
	YAxis,
	Legend,
	ResponsiveContainer,
} from "recharts";

/**
 *
 * @param { Array } data.dataActivity
 * @returns
 */
export default function DailyActivity(data) {
	const dayActivity = data.dataActivity.map((daily) => {
		return { calories: daily.calories, day: daily.day.split("-")[2], kilogram: daily.kilogram };
	});

	return (
		<section className="user-data__daily">
			<h2>Activité quotidienne</h2>
			<ResponsiveContainer width="100%" height={250}>
				<BarChart data={dayActivity}>
					<CartesianGrid strokeDasharray="3 3" vertical={false} />
					<XAxis dataKey="day" stroke="#9B9EAC" tickLine={false} />
					<YAxis dataKey="calories" stroke="#9B9EAC" strokeWidth={0} orientation="right" />
					<Tooltip
						labelStyle={{ display: "none" }}
						contentStyle={{ background: "#E60000" }}
						itemStyle={{ color: "#ffffff", textAlign: "center" }}
						formatter={(value, name) => [name === "kilogram" ? `${value}kg` : `${value}Kcal`]}
					/>
					<Legend
						verticalAlign="top"
						align="right"
						iconType="circle"
						iconSize="6"
						height={36}
						formatter={(value) => [value === "kilogram" ? "Poids (kg)" : "Calories brûlées (kCal)"]}
					/>
					<Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} />
					<Bar dataKey="calories" fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} />
				</BarChart>
			</ResponsiveContainer>
		</section>
	);
}

DailyActivity.propTypes = {
	dataActivity: PropTypes.array.isRequired,
};
