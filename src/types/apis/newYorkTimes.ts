export interface HistoricalCovidDataByLocation {
  zipCd:    string;
  counties: County[];
}

export interface County {
  countyName:   string;
  geo:          Geo;
  historicData: HistoricDatum[];
}

export interface Geo {
  rightTopLatLong:    number;
  leftBottomLatLong:  number;
  leftTopLatLong:     number;
  rightBottomLatLong: number;
}

export interface HistoricDatum {
  date:        string;
  deathCt:     number;
  positiveCt:  number;
  recoveredCt: null;
}
