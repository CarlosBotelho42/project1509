/* eslint-disable prettier/prettier */
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers : {
        'Acept' : 'application/json',
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    
})

export default api