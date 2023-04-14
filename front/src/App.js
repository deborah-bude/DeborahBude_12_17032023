import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home/index";
import Error404 from "./Pages/404/index";
import { sourceApi } from "./fetchAPI";
import { sourceMock } from "./fetchMock";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home source={sourceApi} />} />
				<Route path="/:id" element={<Home source={sourceApi} />} />
				<Route path="/page-non-trouvee" element={<Error404 />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
