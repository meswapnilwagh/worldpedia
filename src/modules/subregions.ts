import { subregionList } from '../db/subregionsDb';
import { ISubregion } from '../interfaces';

/**
 * Get all subregions
 *
 * @return {*}  {ISubregion[]}
 */
const getAllSubregions = (): ISubregion[] => {
    return subregionList;
}

/**
 * get all subregions by continent code
 *
 * @param {string} continentCode
 * @return {*}  {(ISubregion | undefined)}
 */
const getAllSubregionByContinent = (continentCode: string): ISubregion[] | undefined => {
    return subregionList.filter(subregion => subregion.continent_code === continentCode);
}

export {
    getAllSubregions,
    getAllSubregionByContinent
};
