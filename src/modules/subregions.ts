import * as _ from 'lodash';
import { ISubregion } from '../interfaces';
import { subregionList } from '../db/subregionsDb';

/**
 * Get all subregions
 *
 * @return {*}  {Array<ISubregion>}
 */
const getAllSubregions = (): Array<ISubregion> => {
    return subregionList;
}

/**
 * get all subregions by continent code
 *
 * @param {string} continentCode
 * @return {*}  {(ISubregion | undefined)}
 */
const getSubregionsByContinentCode = (continentCode: string): Array<ISubregion> | undefined => {
    return _.filter(subregionList, [ "continent_code", continentCode ]);
}

export { 
    getAllSubregions, 
    getSubregionsByContinentCode 
};