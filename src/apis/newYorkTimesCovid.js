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
      console.log(err);
      console.log('🚀 ~ file: newYorkTimesCovid.js ~ line 16 ~ NewYorkTimesCovid ~ returnthis.axios.request ~ err', JSON.stringify(err, null, 2));
      throw err;
    });
  }

  /**
   *
   * @param {number} zipCode
   * @param {number} daysInPast
   * @returns {Promise<import('../types/apis/newYorkTimes').HistoricalCovidDataByLocation>}
   */
  getHistoricalCovidDataByLocation(zipCode, daysInPast) {
    const requestOptions = {
      method: 'GET',
      url: '/cases/newYorkTimes?zipCode=13619&daysInPast=4',
    };
    const url = '/cases/newYorkTimes?zipCode=13619&daysInPast=4';

    // requestOptions.url = url.concat(`?zipCode=${zipCode}&&daysInPast=${daysInPast}`);

    // @ts-ignore
    return this.request(requestOptions);
  }
}
