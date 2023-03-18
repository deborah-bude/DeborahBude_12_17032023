import React from "react";
import caloriesIcon from "../assets/calories-icon.svg";
import proteinIcon from "../assets/protein-icon.svg";
import carbsIcon from "../assets/carbs-icon.svg";
import fatIcon from "../assets/fat-icon.svg";

export default function NutritionValue(nutrition) {
	let icon;
	let altIcon = "Icône" + nutrition.value;
	let classIcon = "nutrition-value " + nutrition.value;
	switch (nutrition.value) {
		case "Calories":
			icon = caloriesIcon;
			break;

		case "Protéines":
			icon = proteinIcon;
			break;

		case "Glucides":
			icon = carbsIcon;
			break;

		case "Lipides":
			icon = fatIcon;
			break;

		default:
			break;
	}
	return (
		<div className={classIcon}>
			<img src={icon} alt={altIcon} />
			<div className="nutrition-value__content">
				<p className="nutrition-value__content--number">{nutrition.content}</p>
				<p className="nutrition-value__content--type">{nutrition.value}</p>
			</div>
		</div>
	);
}
