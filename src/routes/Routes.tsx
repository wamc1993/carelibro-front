import { useSelector } from "react-redux";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import PostPage from "../pages/PostPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";

const Routes: React.FC = () => {
	const { isLogged } = useSelector((store: any) => {
		return {
			isLogged: store.user.loggedIn,
		};
	});

	return (
		<BrowserRouter>
			<Switch>
				<Route
					path="/"
					element={
						<ProtectedRoute isAccesible={isLogged}>
							<HomePage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/post"
					element={
						<ProtectedRoute isAccesible={isLogged}>
							<PostPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/login"
					element={
						<ProtectedRoute
							isAccesible={!isLogged}
							redirectPath={"/"}
						>
							<LoginPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/signup"
					element={
						<ProtectedRoute
							isAccesible={!isLogged}
							redirectPath={"/"}
						>
							<SignupPage />
						</ProtectedRoute>
					}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
