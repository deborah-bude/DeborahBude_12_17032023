import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import DailyActivity from "../../components/DailyActivity";
import SessionDuration from "../../components/SessionDuration";
import UserPerformance from "../../components/UserPerformance";
import UserProgression from "../../components/UserProgression";
import NutritionValue from "../../components/NutritionValue";

export default function Home({ source }) {
	const params = useParams();
	const userId = params.id;

	const [dataUser, setDataUser] = useState();
	const [dataActivity, setDataActivity] = useState();
	const [dataAverageSessions, setDataAverageSessions] = useState();
	const [dataPerformance, setDataPerformance] = useState();

	useEffect(() => {
		source.userData(userId).then((fetchUserInfos) => {
			setDataUser(fetchUserInfos.data);
		});
	}, []);

	useEffect(() => {
		source.userActivity(userId).then((fetchActivity) => {
			setDataActivity(fetchActivity.data.sessions);
		});
	}, []);

	useEffect(() => {
		source.userAverageSessions(userId).then((fetchSessionInfos) => {
			setDataAverageSessions(fetchSessionInfos.data.sessions);
		});
	}, []);

	useEffect(() => {
		source.userPerformance(userId).then((fetchPerformance) => {
			setDataPerformance(fetchPerformance.data);
		});
	}, []);

	// if (userId !== dataUser.id) {
	// 	return <Navigate to="/page-non-trouvee" replace={true} />;
	// }

	if (!dataUser || !dataActivity || !dataAverageSessions || !dataPerformance) {
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
					<DailyActivity dataActivity={dataActivity} />
					<SessionDuration dataAverageSessions={dataAverageSessions} />
					<UserPerformance dataPerformance={dataPerformance} />
					<UserProgression score={dataUser.todayScore} />
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
