import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export const login = (loginData) =>
    axios.post(`${API_BASE_URL}/api/v1/users/login`, loginData);
