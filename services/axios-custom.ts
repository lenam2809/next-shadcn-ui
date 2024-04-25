import axios from "axios";
import { ApiUrl } from "../public/app-setting";
import { AuthService } from ".";


const api = axios.create({
    baseURL: ApiUrl
});



api.interceptors.request.use(
    (config) => {
        const { getOauth } = AuthService();
        const oauth = getOauth() || {};
        if (oauth) {
            config.headers["Authorization"] = "Bearer " + oauth;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
