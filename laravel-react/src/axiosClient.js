import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.REACT_APP_API_URI}`, // `${import.meta.env.REACT_APP_API_URI}`,
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");

    config.headers.Authorization = `bearer ${token}`;

    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        try {
            const response = err.response;

            if (response.status === 401) {
                localStorage.removeItem("ACCESS_TOKEN");
                window.location.href = "/login";
            }
        } catch (err) {
            console.log(err);
        }

        throw err;
    }
);

export default axiosClient;
