import axios from "axios";

export const USER_ID = "25f01973-5f61-47af-89f2-1f2271b5ac83";

const api = axios.create({
  baseURL: "http://192.168.0.26:3000", //localhost
});

export default api;
