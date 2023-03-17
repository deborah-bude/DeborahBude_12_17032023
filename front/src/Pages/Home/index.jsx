import DailyActivity from "../../components/DailyActivity";
import SessionDuration from "../../components/SessionDuration";
import RadarChart from "../../components/RadarChart";
import GaugeChart from "../../components/GaugeChart";
import NutritionValue from "../../components/NutritionValue";

export default function Home() {
	const name = "Karl";
	return (
		<section>
			<section>
				<h1>
					Bonjour <span className="title-page--red">{name}</span>
				</h1>
				<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</section>
			<DailyActivity />
			<SessionDuration />
			<RadarChart />
			<GaugeChart />
			<section>
				<NutritionValue content="1,930kCal" value="Calories" />
				<NutritionValue content="155g" value="Protéines" />
				<NutritionValue content="290g" value="Glucides" />
				<NutritionValue content="50g" value="Lipides" />
			</section>
		</section>
	);
}
