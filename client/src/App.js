import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainApp from "./pages/mainApp/MainApp";
import AppContext from "./contexts/App.context";

import "./App.scss";
import "./Colors.scss";

function App() {

	const [ tokens, setTokens ] = useState({});
	const [ loggedUser, setLoggedUser ] = useState({});

	const appContextValue = {
		tokens, setTokens,
		loggedUser, setLoggedUser
	};

	return (
		<AppContext.Provider value={appContextValue}>
			<Routes>
				<Route path="/*" element={<MainApp />} />
				<Route path="/ler" element={<div>Ler</div>} />
				{/* <Route path="/*" element={<SplashScreen />} /> */}
			</Routes>
		</AppContext.Provider>
	);
}

export default App;
