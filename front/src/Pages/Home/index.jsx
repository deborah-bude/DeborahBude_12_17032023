import React, { useEffect, useState } from "react";
import DailyActivity from "../../components/DailyActivity";
import SessionDuration from "../../components/SessionDuration";
import UserPerformance from "../../components/UserPerformance";
import UserProgression from "../../components/UserProgression";
import NutritionValue from "../../components/NutritionValue";
import { userData } from "../../fetchAPI";

export default function Home() {
	const userId = "12";
	const [dataUser, setDataUser] = useState();
	useEffect(() => {
		userData(userId).then((fetchUserInfos) => {
			setDataUser(fetchUserInfos.data);
		});
	}, []);

	if (!dataUser) {
		return null;
	}

	const numberCalorie = dataUser.keyData.calorieCount + "kCal";
	const numberProteines = dataUser.keyData.proteinCount + "g";
	const numberGlucides = dataUser.keyData.carbohydrateCount + "g";
	const numberLipides = dataUser.keyData.lipidCount + "g";

	return (
		<main className="corps-page">
			<section>
				<h1>
					Bonjour <span className="title-page--red">{dataUser.userInfos.firstName}</span>
				</h1>
				<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</section>
			<section className="user-data">
				<section className="user-data__details">
					<DailyActivity id={userId} />
					<SessionDuration id={userId} />
					<UserPerformance id={userId} />
					<UserProgression id={userId} />
				</section>
				<section className="user-data__nutrition">
					{numberCalorie && <NutritionValue content={numberCalorie} value="Calories" />}
					<NutritionValue content={numberProteines} value="Protéines" />
					<NutritionValue content={numberGlucides} value="Glucides" />
					<NutritionValue content={numberLipides} value="Lipides" />
				</section>
			</section>
		</main>
	);
}
