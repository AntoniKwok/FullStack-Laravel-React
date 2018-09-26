import axios from 'axios'

export default class Request{
    static make(method, endpoint, data = {}){
        return axios({
            method : method,
            url : `${process.env.REACT_APP_API}${endpoint}`,
            //sebelum ada .env endpoint : "http://localhost:8000/api/" + endpoint,
            //endpoint : `http://localhost:8000/api/${endpoint}`
            data : data
        })        
    }
}