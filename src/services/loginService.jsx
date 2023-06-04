import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const login = (loginData) =>
    axios.post(`${API_BASE_URL}/api/v1/users/login`, loginData);
