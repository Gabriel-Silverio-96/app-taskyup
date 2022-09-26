import axios from "axios";

const baseURL = "https://api-mynotes-production.up.railway.app";

const ONE_MINUTE = 60000;

const api = axios.create({
	baseURL,
	timeout: ONE_MINUTE,    
	timeoutErrorMessage: "There was an unexpected problem, your request is taking too long. Try again later"
});

export default api;