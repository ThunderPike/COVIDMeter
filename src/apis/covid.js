import axios from 'axios'

export default class Covid {
    static getGlobalCovidCases() {
        return axios.get('https://corona.lmao.ninja/v2/all?yesterday=true')
    }
}
