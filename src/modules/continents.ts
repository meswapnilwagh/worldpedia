import { continentList } from '../db/continentsDb';
import { IContinent } from '../interfaces';

/**
 * Get all continents
 *
 * @return {*}  {IContinent[]}
 */
const getAllContinents = (): IContinent[] => {
    return continentList;
}

/**
 * Get continent by code
 *
 * @param {string} code
 * @return {*}  {(IContinent | undefined)}
 */
const getContinentByCode = (code: string): IContinent | undefined => {
    return continentList.find(continent => continent.code === code);
}

export {
    getAllContinents,
    getContinentByCode
};

