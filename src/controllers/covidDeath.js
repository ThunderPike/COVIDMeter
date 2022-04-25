import joi from 'joi';
import NewYorkTimesCovid from '../apis/newYorkTimesCovid.js';

export default class CovidDeath {
  static async getCovidDeath(req, res) {
    try {
      const { zipCode, daysInPast } = CovidDeath.validateGetCovidDeath(req.query);

      const newYorkTimesCovid = new NewYorkTimesCovid();

      const response = await newYorkTimesCovid
        .getHistoricalCovidDataByLocation(zipCode, daysInPast);

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ message: 'fuck' });
    }
  }

  /**
   *
   * @typedef {object} validateGetCovidDeathParam
   * @property {number} zipCode
   * @property {number} daysInPast
   */
  /**
   *
   * @param {validateGetCovidDeathParam} values
   * @returns {validateGetCovidDeathParam}
   */
  static validateGetCovidDeath(values) {
    const schema = joi.object().keys({
      zipCode: joi.number().required(),
      daysInPast: joi.number().default(0),
    });

    return schema.validate(values).value;
  }
}
