import * as _ from 'lodash';
import { stateList } from '../db/statesDb';
import { IState } from '../interfaces';

/**
 * Get all states
 *
 * @return {*}  {Array<IState>}
 */
const getAllStates = (): Array<IState> => {
    return stateList;
}

/**
 * get all states of country by country code
 *
 * @param {string} countryCode
 * @return {*}  {Array<IState>}
 */
const getStatesByCountry = (countryCode: string): Array<IState> => {
    return _.filter(stateList,['countryCode',countryCode]);
}

/**
 * get state by state code and country code
 *
 * @param {string} code
 * @param {string} countryCode
 * @return {*}  {(IState | undefined)}
 */
const getStateByCodeAndCountry = (code: string, countryCode: string): IState | undefined => {
    return _.find(stateList,{isoCode:code,countryCode:countryCode})
}

export {
    getAllStates,
    getStatesByCountry,
    getStateByCodeAndCountry
};
