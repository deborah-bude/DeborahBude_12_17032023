export function userData(userId) {
	const url = `http://localhost:3080/user/${userId}`;

	return fetch(url, {
		method: "GET",
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			return data;
		})
		.catch((err) => {
			console.log(err.message);
		});
}

export function userActivity(userId) {
	const url = `http://localhost:3080/user/${userId}/activity`;

	return fetch(url, {
		method: "GET",
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			return data;
		})
		.catch((err) => {
			console.log(err.message);
		});
}

export function userAverageSessions(userId) {
	const url = `http://localhost:3080/user/${userId}/average-sessions`;

	return fetch(url, {
		method: "GET",
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			return data;
		})
		.catch((err) => {
			console.log(err.message);
		});
}

export function userPerformance(userId) {
	const url = `http://localhost:3080/user/${userId}/performance`;

	return fetch(url, {
		method: "GET",
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			return data;
		})
		.catch((err) => {
			console.log(err.message);
		});
}

export const sourceApi = {
	userData,
	userActivity,
	userAverageSessions,
	userPerformance,
};
