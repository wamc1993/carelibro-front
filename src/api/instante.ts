import axios from "axios";

const instance = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

instance.interceptors.request.use((config) => {
	const token = localStorage.getItem("carelibro.token");
	config.headers.Authorization = token ? `Bearer ${token}` : "";
	return config;
});

export const saveTokenOnLocal = (token: string) => {
	localStorage.setItem("carelibro.token", token);
};

export default instance;
