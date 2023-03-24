export function userData(userId) {
	// let responseRequest;
	// const request = new XMLHttpRequest();
	const url = `http://localhost:3080/user/${userId}`;
	// request.open("GET", url);
	// request.responseType = "json";
	// request.onload = () => {
	// 	console.log(request.response);
	// 	return request.response;
	// };
	// request.send();

	return fetch(url, {
		method: "GET",
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			return data;
		})
		.catch((err) => {
			console.log(err.message);
		});
}

export function userActivity(userId) {
	fetch(`http://localhost:3080/user/${userId}/activity`)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			return data;
		});
}

export function userAverageSessions(userId) {
	fetch(`http://localhost:3080/user/${userId}/average-sessions`)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			return data;
		});
}

export function userPerformance(userId) {
	fetch(`http://localhost:3080/user/${userId}/performance`)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			return data;
		});
}
