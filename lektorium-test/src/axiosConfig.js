import axios from "axios";

const BASE_URL = 'https://ekreative-json-server.herokuapp.com'
const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    return config;
})

instance.interceptors.response.use((config) => {
    return config;
}, (async(error) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'))
        const baseConfig = error.config;
        if(error.response.status === 401){
            const resp = await axios.post(`${BASE_URL}/login`,{
                'email': user.email,
                'password': JSON.parse(localStorage.getItem('password'))
            })
            localStorage.setItem('token', JSON.stringify(resp.data.accessToken));
        }
        return instance.request(baseConfig)
    } catch (error) {
        console.log(error);
    }
    
}))

export default instance;