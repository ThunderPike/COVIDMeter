import axios from 'axios';

export default class coronaLMAONinja {
    constructor(){
        this.axios = axios.create({
            baseURL: 'https://corona.lmao.ninja/v2',
        }
        )
    }
    httpRequest(options) {
        return this.axios.request(options).then((value) => value.data).catch((err) => {throw err;});
    }

    /**
     * 
     * @param {string} state 
     * @returns 
     */
    getState(state){
        const requestOptions = {
            method: 'GET',
            url : `/states/${state}`,
        }
        return this.httpRequest(requestOptions);
    }
    
}