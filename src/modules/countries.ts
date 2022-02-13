import { countryList } from '../db/countriesDb';
import { ICountry } from '../interfaces';

/**
 * Get all countries
 *
 * @return {*}  {IArray<ICountry>}
 */
const getAllCountries = (): ICountry[] => {
    return countryList;
}

/**
 * get country by iso2 or iso3 code 
 * 
 * @param {string} code
 * @return {*}  {(ICountry | undefined)}
 */
const getCountryByCode = (code: string): ICountry | undefined => {
    return countryList.find(country => country.iso2 === code || country.iso3 === code);
}

/**
 * get all country by continent code
 *
 * @param {string} continentCode
 * @return {*}  {(ICountry[])}
 */
const getAllCountriesByContinent = (continentCode: string): ICountry[] => {
    return countryList.filter(country => country.continent_code === continentCode);
}

/**
 * Get all countries of region
 *
 * @param {string} regionName
 * @return {*}  {ICountry[]}
 */
const getAllCountriesBySubregion = (subregion: string): ICountry[] => {
    return countryList.filter(country => country.subregion === subregion);
}

export {
    getAllCountries,
    getCountryByCode,
    getAllCountriesByContinent,
    getAllCountriesBySubregion
};
