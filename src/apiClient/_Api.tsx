import axios, {AxiosInstance} from "axios";

export const createApiInstance = (): AxiosInstance => {
    return axios.create({
        baseURL: "https://buddylanguageapi.azurewebsites.net",
    });
};

const api: AxiosInstance = createApiInstance();

export default api;