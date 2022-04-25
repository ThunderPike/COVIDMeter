import axios from 'axios';

export default class NewYorkTimesCovid {
  constructor() {
    /** @private */
    this.axios = axios.create({
      baseURL: 'https://localcoviddata.com/covid19/v1',
    });
  }

  request(options) {
    return this.axios.request(options).then((value) => value.data).catch((err) => {
      throw err;
    });
  }

  /**
   *
   * @param {number} zipCode
   * @param {number} daysInPast - The days you want to look back on
   * @returns {Promise<import('../types/apis/newYorkTimes').HistoricalCovidDataByLocation>}
   */
  getHistoricalCovidDataByLocation(zipCode, daysInPast) {
    const requestOptions = {
      method: 'GET',
      url: `/cases/newYorkTimes?zipCode=${zipCode}&daysInPast=${daysInPast}`,
    };

    // @ts-ignore
    return this.request(requestOptions);
  }
}
