export interface IContinent {
    name: string;
    code: string;
    getAllContinents?(): IContinent[];
    getContinentByCode?(code: string): IContinent;
}

export interface ISubregion {
    name: string;
    continent: string;
    continent_code: string;
    getAllSubregions?(): ISubregion[];
    getSubregionsByContinentCode?(continentCode: string): ISubregion[];
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
  translations: object;
  latitude: string;
  longitude: string;
  emoji: string;
  emojiU: string;
  continent: string;
  continent_code: string;
  flag:string;
  getAllCountries?(): ICountry[];
  getCountryByCode?(code: string): ICountry;
  getAllCountriesByContinent?(continentCode: string): ICountry[];
  getAllCountriesBySubregion?(subregion: string): ICountry[];
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
  getAllStates?(): IState[];
  getAllStatesByCountry?(countryCode: string): IState[];
  getStateByCodeAndCountry?(isoCode: string, countryCode: string): IState;
}

export interface ICity {
  name: string;
  countryCode: string;
  stateCode: string;
  latitude: string | null;
  longitude: string | null;
  getAllCities?(): ICity[];
  getAllCitiesByCountry?(countryCode: string): ICity[];
  getAllCitiesOfState?(stateCode: string,countryCode:string): ICity[];
}