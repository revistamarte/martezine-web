import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainApp from "./pages/mainApp/MainApp";
import AppContext from "./contexts/App.context";

import "./App.scss";
import "./Colors.scss";
import browserStorageService from "./services/browserStorage";
import userService from "./services/user";
import AppBackground from "./constants/appBackground";

function App() {

	const [ tokens, setTokens ] = useState(null);
	const [ loggedUser, setLoggedUser ] = useState(null);
	const [ background, setBackground ] = useState(AppBackground.RED);

	const appContextValue = {
		tokens, setTokens,
		loggedUser, setLoggedUser,
		background, setBackground
	};

	useEffect(() => {
		const retrieveTokens = async () => {
			const accessToken = await browserStorageService.getAccessToken();
			const refreshToken = browserStorageService.getRefreshToken();
			if (accessToken != null && refreshToken != null) {
				const userData = (await userService.getLoggedUser(accessToken)).data;
				setTokens({
					accessToken, refreshToken
				});
				setLoggedUser(userData);
			}
		}
		retrieveTokens();
	}, []);

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
