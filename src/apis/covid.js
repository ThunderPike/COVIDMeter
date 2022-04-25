import axios from 'axios';

export default class Covid {
  constructor() {
    this.baseURL = 'https://corona.lmao.ninja/v2/all?yesterday=true';
  }

  static getGlobalCovidCases() {
    return axios.get(this.baseURL);
  }
}
