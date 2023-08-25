import axios from "axios";
import { baseURL } from "./api_constant";

const API_KEY = 'live_qjYmWPEQdsa8PpF3Pv1Ywk1jufbCwfVHc6qhDNiApVmBXbEaTKqhADaYKLAI58Rs';


export const instanseAxios = axios.create({
    baseURL,
    headers: {
       "x-api-key": API_KEY
    }
})