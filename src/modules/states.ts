import * as _ from 'lodash';
import { stateList } from '../db/statesDb';
import { IState } from '../interfaces';

/**
 * Get all states
 *
 * @return {*}  {IState[]}
 */
const getAllStates = (): IState[] => {
    return stateList;
}

/**
 * get all states of country by country code
 *
 * @param {string} countryCode
 * @return {*}  {IState[]}
 */
const getAllStatesByCountry = (countryCode: string): IState[] => {
    return _.filter(stateList,['countryCode',countryCode]);
}

/**
 * get state by state code and country code
 *
 * @param {string} isoCode
 * @param {string} countryCode
 * @return {*}  {(IState | undefined)}
 */
const getStateByCodeAndCountry = (isoCode: string, countryCode: string): IState | undefined => {
    return _.find(stateList,{isoCode,countryCode})
}

export {
    getAllStates,
    getAllStatesByCountry,
    getStateByCodeAndCountry
};
