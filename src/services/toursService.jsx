import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export const getAllTours = () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2FmOGZkNmRmZTAxMjJlYzVlZmI5ZCIsImlhdCI6MTY4NTg4ODQ3MCwiZXhwIjoxNjg1OTc0ODcwfQ.1TMzcM1R1lxnD4I59nBTghuI6In4TSwZWaHW-ZoJy-w";

    const headers = {
        Authorization: `Bearer ${token}`,
    }
    return axios.get(`${API_BASE_URL}/api/v1/tours`, { headers });

};
