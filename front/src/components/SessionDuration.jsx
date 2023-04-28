import React, { useState } from "react";
import PropTypes from "prop-types";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

/**
 *
 * @param { Object } data.dataAverageSessions
 * @returns
 */
export default function SessionDuration(data) {
	const [perc, setPerc] = useState(100);

	const CustomizedDot = (props) => {
		const { cx, cy } = props;
		return (
			<svg
				className="session-duration_activeDot"
				x={cx - 10}
				y={cy - 10}
				width={20}
				height={20}
				viewBox="0 0 150 150"
			>
				<circle
					id="animation-circle"
					cx="73.945"
					cy="75.959"
					r="43.734"
					style={{ fill: "rgba(255,255,255,0.5)" }}
				/>
				<circle cx="73.945" cy="75.959" r="43.734" style={{ fill: "white" }} />
			</svg>
		);
	};

	const onMouseMove = (hoveredData) => {
		if (hoveredData && hoveredData.activePayload) {
			const percentage = (hoveredData.activeLabel * 100) / data.dataAverageSessions.length;
			setPerc(percentage);
		}
	};

	const onMouseOut = () => {
		setPerc(100);
	};

	return (
		<section className="user-data__duration" style={{background : `linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,0,0,1) calc(${perc}% - 13px), rgba(230,0,0,1) calc(${perc}% - 13px), rgba(230,0,0,1) 100%)`}}>
			<h2>Durée moyenne des sessions</h2>
			<ResponsiveContainer width="100%" height={200}>
				<LineChart
					data={data.dataAverageSessions}
					onMouseMove={onMouseMove}
					onMouseOut={onMouseOut}
				>
					<XAxis dataKey="day" stroke="#ffffff" strokeWidth={0} />
					<Tooltip
						formatter={(value) => [`${value} min`]}
						labelStyle={{ display: "none" }}
						itemStyle={{ color: "#000000", fontWeight: "700" }}
					/>
					<defs>
						<linearGradient id="colorStroke" x1="0%" y1="0" x2="100%" y2="0">
							<stop offset="0%" stopColor="rgba(255,255,255,0)" />
							<stop offset={`${perc - 10}%`} stopColor="rgba(255,255,255,1)" />
							<stop offset={`${100}%`} stopColor="rgba(255,255,255,1)" />
						</linearGradient>
					</defs>
					<Line
						type="monotone"
						dataKey="sessionLength"
						stroke="url(#colorStroke)"
						strokeWidth={3}
						dot={false}
						activeDot={<CustomizedDot />}
					/>
				</LineChart>
			</ResponsiveContainer>
		</section>
	);
}

SessionDuration.propTypes = {
	dataAverageSessions: PropTypes.array.isRequired,
};
