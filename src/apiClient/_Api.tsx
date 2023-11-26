import axios from "axios";

const api = axios.create({
    baseURL: "https://buddylanguageapi.azurewebsites.net",
    });

export default api;