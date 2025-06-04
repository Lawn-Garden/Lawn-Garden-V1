import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://43.201.157.40:8082/',
    // withCredentials: true, 없어도된다!!
    // headers: {
    //     'Authorization': 'Bearer API_TOKEN',
    // },
})

export default Axios;