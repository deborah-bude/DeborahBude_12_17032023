import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import DailyActivity from "../../components/DailyActivity";
import SessionDuration from "../../components/SessionDuration";
import UserPerformance from "../../components/UserPerformance";
import UserProgression from "../../components/UserProgression";
import NutritionValue from "../../components/NutritionValue";

/**
 *
 * @param {object} source
 * @returns
 */
export default function Home({ source }) {
	const params = useParams();
	const userId = params.id;

	const [isLoading, setLoading] = useState(true);
	const [dataUser, setDataUser] = useState();
	const [dataActivity, setDataActivity] = useState();
	const [dataAverageSessions, setDataAverageSessions] = useState();
	const [dataPerformance, setDataPerformance] = useState();

	useEffect(() => {
		const userDataPromise = source.userData(userId);
		const userActivityPromise = source.userActivity(userId);
		const userSessionPromise = source.userAverageSessions(userId);
		const userPerformancePromise = source.userPerformance(userId);

		Promise.allSettled([
			userDataPromise,
			userActivityPromise,
			userSessionPromise,
			userPerformancePromise,
		]).then(([userDataResult, userActivityResult, userSessionResult, userPerformanceResult]) => {
			if (userDataResult.status === "fulfilled") {
				setDataUser(userDataResult.value.data);
			}
			if (userActivityResult.status === "fulfilled") {
				setDataActivity(userActivityResult.value.data.sessions);
			}
			if (userSessionResult.status === "fulfilled") {
				setDataAverageSessions(userSessionResult.value.data.sessions);
			}
			if (userPerformanceResult.status === "fulfilled") {
				setDataPerformance(userPerformanceResult.value.data);
			}
			setLoading(false);
		});
	}, []);

	if (isLoading) {
		return null;
	}

	if (!dataUser) {
		return <Navigate to="/page-non-trouvee" replace={true} />;
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
					{dataActivity && <DailyActivity dataActivity={dataActivity} />}
					{dataAverageSessions && <SessionDuration dataAverageSessions={dataAverageSessions} />}
					{dataPerformance && <UserPerformance dataPerformance={dataPerformance} />}
					{dataUser && <UserProgression score={dataUser.todayScore} />}
				</section>
				<section className="user-data__nutrition">
					{numberCalorie && <NutritionValue content={numberCalorie} value="Calories" />}
					{numberProteines && <NutritionValue content={numberProteines} value="Protéines" />}
					{numberGlucides && <NutritionValue content={numberGlucides} value="Glucides" />}
					{numberLipides && <NutritionValue content={numberLipides} value="Lipides" />}
				</section>
			</section>
		</main>
	);
}
