import axios from "axios";

const baseURL = process.env.REACT_APP_ENVIRONMENT === "production" 
	? "https://api-taskyup.onrender.com" : "http://localhost:4041";

const ONE_MINUTE = 60000;

const api = axios.create({
	baseURL,
	timeout: ONE_MINUTE,    
	timeoutErrorMessage: "There was an unexpected problem, your request is taking too long. Try again later"
});

export default api;