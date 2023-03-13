import React from "react";
import { Navigate } from "react-router-dom";

export interface ProtectedRouteProps {
	isAccesible: boolean;
	children: any;
	redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
	isAccesible,
	children,
	redirectPath = "/login",
}) => {
	if (!isAccesible) {
		return <Navigate to={redirectPath} replace />;
	}
	return children;
};

export default ProtectedRoute;
