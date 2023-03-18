import React from "react";
import DailyActivity from "../../components/DailyActivity";
import SessionDuration from "../../components/SessionDuration";
import UserPerformance from "../../components/UserPerformance";
import UserProgression from "../../components/UserProgression";
import NutritionValue from "../../components/NutritionValue";

export default function Home() {
	const name = "Karl";
	return (
		<main className="corps-page">
			<section>
				<h1>
					Bonjour <span className="title-page--red">{name}</span>
				</h1>
				<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</section>
			<section className="user-data">
				<section className="user-data__details">
					<DailyActivity />
					<SessionDuration />
					<UserPerformance />
					<UserProgression />
				</section>
				<section className="user-data__nutrition">
					<NutritionValue content="1,930kCal" value="Calories" />
					<NutritionValue content="155g" value="Protéines" />
					<NutritionValue content="290g" value="Glucides" />
					<NutritionValue content="50g" value="Lipides" />
				</section>
			</section>
		</main>
	);
}
