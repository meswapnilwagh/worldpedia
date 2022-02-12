import * as _ from 'lodash';
import { IContinent } from '../interfaces';
import { continentList } from '../db/continentsDb';

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
    return _.find(continentList, ["code", code]);
}

export {
    getAllContinents,
    getContinentByCode
};

