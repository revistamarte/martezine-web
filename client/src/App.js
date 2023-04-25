import React from "react";
import { Route, Routes } from "react-router-dom";
// import MainApp from "./pages/mainApp/MainApp";

import "./Colors.scss";
import SplashScreen from "./pages/splashScreen/SplashScreen";

function App() {
	return (
		<Routes>
			{/* <Route path="/*" element={<MainApp />} /> */}
			{/* <Route path="/ler" element={<div>Ler</div>} /> */}
			<Route path="/*" element={<SplashScreen />} />
		</Routes>
	);
}

export default App;
