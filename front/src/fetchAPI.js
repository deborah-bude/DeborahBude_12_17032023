export function userData(userId) {
	const url = `http://localhost:3080/user/${userId}`;

	return fetch(url, {
		method: "GET",
	})
		.then(function (response) {
			return response.json();
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
		.catch((err) => {
			console.log(err.message);
		});
}

/**
 * Get user performance data from API
 *
 * @param {string} userId
 * @returns { Promise<object> }
 */
export function userPerformance(userId) {
	const url = `http://localhost:3080/user/${userId}/performance`;

	return fetch(url, {
		method: "GET",
	})
		.then(function (response) {
			return response.json();
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
