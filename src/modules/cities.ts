import * as _ from 'lodash';
import {cityList} from '../db/citiesDb';
import {ICity} from '../interfaces';

/**
 * get all cities
 *
 * @return {*}  {Array<ICity>}
 */
const getAllCities = (): Array<ICity> => {
    return cityList;
}

/**
 * get all cities of state by state code & country code
 *
 * @param {string} stateCode
 * @param {string} countryCode
 * @return {*}  {Array<ICity>}
 */
const getCitiesOfState = (stateCode: string,countryCode:string): Array<ICity> => {
    return _.filter(cityList,{stateCode:stateCode,countryCode:countryCode});
}

export {
    getAllCities,
    getCitiesOfState
};