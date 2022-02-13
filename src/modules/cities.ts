import { cityList } from '../db/citiesDb';
import { ICity } from '../interfaces';

/**
 * get all cities
 *
 * @return {*}  {ICity[]}
 */
const getAllCities = (): ICity[] => {
    return cityList;
}

/**
 * get all cities of state by state code & country code
 *
 * @param {string} stateCode
 * @param {string} countryCode
 * @return {*}  {ICity[]}
 */
const getAllCitiesOfState = (stateCode: string,countryCode:string): ICity[] => {
    return cityList.filter(city => city.stateCode === stateCode && city.countryCode === countryCode);
}

/**
 * get all cities of state by state code & country code
 *
 * @param {string} stateCode
 * @param {string} countryCode
 * @return {*}  {ICity[]}
 */

const getAllCitiesByCountry = (countryCode: string): ICity[] => {
    return cityList.filter(city => city.countryCode === countryCode);
}

export {
    getAllCities,
    getAllCitiesOfState,
    getAllCitiesByCountry
};
