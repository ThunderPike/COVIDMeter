import { jest } from '@jest/globals';

import NewYorkTimesCovid from './newYorkTimesCovid.js';

jest.setTimeout(10000000);

describe('NewYorkTimeCovid', () => {
  it('should return an instance', () => {
    const newYorkTimesCovid = new NewYorkTimesCovid();

    expect(newYorkTimesCovid).toBeInstanceOf(NewYorkTimesCovid);
  });

  describe('getHistoricalCovidDataByLocation', () => {
    it('should return a list of counties', async () => {
      const newYorkTimesCovid = new NewYorkTimesCovid();
      const test = await newYorkTimesCovid.getHistoricalCovidDataByLocation(11427, 4);
      expect(test.counties).toHaveLength(2);
    });
  });
});
