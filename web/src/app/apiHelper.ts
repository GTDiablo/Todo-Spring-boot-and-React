import axios, {AxiosInstance} from "axios";

const BASE_URL: string = 'http://localhost:8080';

const apiHelper = (baseURL: string): AxiosInstance => {
    const headers = {};
    return axios.create({
        baseURL,
        headers
    });
}

export default apiHelper(BASE_URL);
