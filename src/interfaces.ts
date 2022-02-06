export interface IContinent {
    name: string;
    code: string;
    getAllContinents?(): Array<IContinent>;
    getContinentByCode?(code: string): IContinent;
}

export interface ISubregion {
    name: string;
    continent: string;
    continent_code: string;
    getAllSubregions?(): Array<ISubregion>;
    getSubregionsByContinentCode?(continentCode: string): Array<ISubregion>;
}

export interface ICountry {
  id: number;
  name: string;
  iso3: string;
  iso2: string;
  numeric_code: string;
  phone_code: string;
  capital: string;
  currency: string;
  currency_name: string;
  currency_symbol: string;
  tld: string;
  native?: string | null;
  subregion: string;
  timezones: Timezone[];
  translations: Object;
  latitude: string;
  longitude: string;
  emoji: string;
  emojiU: string;
  continent: string;
  continent_code: string;
}

interface Timezone {
  zoneName: string;
  gmtOffset: number;
  gmtOffsetName: string;
  abbreviation: string;
  tzName: string;
}

export interface IState {
  name: string;
  isoCode: string;
  countryCode: string;
  latitude: string | null;
  longitude: string | null;
}

export interface ICity {
  name: string;
  countryCode: string;
  stateCode: string;
  latitude: string | null;
  longitude: string | null;
}