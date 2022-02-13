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
    return stateList.filter(state => state.countryCode === countryCode);
}

/**
 * get state by state code and country code
 *
 * @param {string} isoCode
 * @param {string} countryCode
 * @return {*}  {(IState | undefined)}
 */
const getStateByCodeAndCountry = (isoCode: string, countryCode: string): IState | undefined => {
    return stateList.find(state => state.isoCode === isoCode && state.countryCode === countryCode);
}

export {
    getAllStates,
    getAllStatesByCountry,
    getStateByCodeAndCountry
};
