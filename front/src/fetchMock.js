async function userData() {
	return {
		data: {
			id: 12,
			userInfos: { firstName: "Toto", lastName: "Dovineau", age: 31 },
			todayScore: 0.5,
			keyData: { calorieCount: 190, proteinCount: 15, carbohydrateCount: 29, lipidCount: 5 },
		},
	};
}

async function userActivity() {
	return {
		data: {
			userId: 12,
			sessions: [
				{
					day: "2020-07-01",
					kilogram: 80,
					calories: 240,
				},
				{
					day: "2020-07-02",
					kilogram: 80,
					calories: 240,
				},
				{
					day: "2020-07-03",
					kilogram: 80,
					calories: 240,
				},
				{
					day: "2020-07-04",
					kilogram: 80,
					calories: 240,
				},
				{
					day: "2020-07-05",
					kilogram: 80,
					calories: 240,
				},
				{
					day: "2020-07-06",
					kilogram: 80,
					calories: 240,
				},
				{
					day: "2020-07-07",
					kilogram: 80,
					calories: 240,
				},
			],
		},
	};
}

async function userAverageSessions() {
	return {
		data: {
			userId: 12,
			sessions: [
				{
					day: 1,
					sessionLength: 30,
				},
				{
					day: 2,
					sessionLength: 23,
				},
				{
					day: 3,
					sessionLength: 45,
				},
				{
					day: 4,
					sessionLength: 50,
				},
				{
					day: 5,
					sessionLength: 0,
				},
				{
					day: 6,
					sessionLength: 0,
				},
				{
					day: 7,
					sessionLength: 60,
				},
			],
		},
	};
}

async function userPerformance() {
	return {
		data: {
			userId: 12,
			kind: {
				1: "cardio",
				2: "energy",
				3: "endurance",
				4: "strength",
				5: "speed",
				6: "intensity",
			},
			data: [
				{
					value: 60,
					kind: 1,
				},
				{
					value: 60,
					kind: 2,
				},
				{
					value: 60,
					kind: 3,
				},
				{
					value: 60,
					kind: 4,
				},
				{
					value: 60,
					kind: 5,
				},
				{
					value: 60,
					kind: 6,
				},
			],
		},
	};
}

export const sourceMock = {
	userData,
	userActivity,
	userAverageSessions,
	userPerformance,
};
