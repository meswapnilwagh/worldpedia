import * as _ from 'lodash';
import { ICountry } from '../interfaces';
import { countryList } from '../db/countriesDb';

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
    return _.find(countryList, ["iso3", code])
        ? _.find(countryList, ["iso3", code])
        : _.find(countryList, ["iso2", code]);
}

/**
 * get all country by continent code
 *
 * @param {string} continentCode
 * @return {*}  {(ICountry[])}
 */
const getAllCountriesByContinent = (continentCode: string): ICountry[] => {
    return _.filter(countryList, ["continent_code", continentCode]);
}

/**
 * Get all countries of region
 *
 * @param {string} regionName
 * @return {*}  {ICountry[]}
 */
const getAllCountriesBySubregion = (subregion: string): ICountry[] => {
    return _.filter(countryList, ["subregion", subregion]);
}

export {
    getAllCountries,
    getCountryByCode,
    getAllCountriesByContinent,
    getAllCountriesBySubregion
};