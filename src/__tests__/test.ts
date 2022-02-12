import { City, Continent, Country, State, Subregion } from '../index';
import { IContinent, ISubregion, ICountry, IState, ICity } from '../interfaces';

import { continentList } from '../db/continentsDb';
import { subregionList } from '../db/subregionsDb';
import { countryList } from '../db/countriesDb';
import { stateList } from '../db/statesDb';
import { cityList } from '../db/citiesDb';

const continentTest = (Continent: any) => {
  test('Test get all continent', () => {
    const continents: IContinent[] = Continent.getAllContinents();
    expect(continents).toEqual(continentList);
  });

  test('Test Get Continent by Code', () => {
    const continent: IContinent = Continent.getContinentByCode('AS');
    expect(continent).toEqual({
      "code": "AS",
      "name": "Asia"
    });
  });

  test('Test continent by null code ', () => {
    const continent: IContinent = Continent.getContinentByCode(null);
    expect(continent).toEqual(undefined);
  });

}

const subregionTest = (Subregion: any) => {
  test('Test get all subregion', () => {
    const subregions: ISubregion[] = Subregion.getAllSubregions();
    expect(subregions).toEqual(subregionList);
  });

  test('Test Get Subregion by Code', () => {
    const subregion: ISubregion[] = Subregion.getAllSubregionByContinent('AS');
    expect(subregion).toEqual(subregionList.filter(subregion => subregion.continent_code === 'AS'));
  });

  test('Test subregion by null code ', () => {
    const subregion: ISubregion[] = Subregion.getAllSubregionByContinent(null);
    expect(subregion).toEqual([]);
  });

}

const countryTest = (Country: any) => {
  test('Test get all countries', () => {
    const countries: ICountry[] = Country.getAllCountries();
    expect(countries).toEqual(countryList);
  });

  test('Test Get country by Code', () => {
    const country: ICountry = Country.getCountryByCode('IN');
    expect(country).toEqual(countryList.find(country => country.iso2 === 'IN'));
  });
  
  test('Test Get country by null Code', () => {
    const country: ICountry = Country.getCountryByCode(null);
    expect(country).toEqual(undefined);
  });

  test('Test get all countries by continent',()=>{
    const countries: ICountry[] = Country.getAllCountriesByContinent('AS');
    expect(countries).toEqual(countryList.filter(country => country.continent_code === 'AS'));
  });

  test('Test get all countries by null continent',()=>{
    const countries: ICountry[] = Country.getAllCountriesByContinent(null);
    expect(countries).toEqual([]);
  });

  test('Test get all countries by subregion',()=>{
    const countries: ICountry[] = Country.getAllCountriesBySubregion('Southern Asia');
    expect(countries).toEqual(countryList.filter(country => country.subregion === 'Southern Asia'));
  });

  test('Test get all countries by null subregion',()=>{
    const countries: ICountry[] = Country.getAllCountriesBySubregion(null);
    expect(countries).toEqual([]);
  });

}

const stateTest = (State: any) => {
  test('Test get all states', () => {
    const states:IState[] = State.getAllStates();
    expect(states).toEqual(stateList);
  });

  test('Test Get state by country', () => {
    const state: IState[] = State.getAllStatesByCountry('IN');
    expect(state).toEqual(stateList.filter(state => state.countryCode === 'IN'));
  });

  test('Test Get state by null country', () => {
    const state: IState[] = State.getAllStatesByCountry(null);
    expect(state).toEqual([]);
  });

  test('Test Get state by code and country code',()=>{
    const state: IState = State.getStateByCodeAndCountry('MH','IN');
    expect(state).toEqual(stateList.find(state => state.isoCode === 'MH' && state.countryCode === 'IN'));
  })

  test('Test Get state by null code and country code',()=>{
    const state: IState = State.getStateByCodeAndCountry(null,null);
    expect(state).toEqual(undefined);
  });

}

const cityTest = (City: any) => {
  test('Test get all cities', () => {
    const cities: ICity[] = City.getAllCities();
    expect(cities).toEqual(cityList);
  });

  test('Test get cities of state',()=>{
    const cities: ICity[] = City.getAllCitiesOfState('MH','IN');
    expect(cities).toEqual(cityList.filter(city => city.stateCode === 'MH' && city.countryCode === 'IN'));
  });

  test('Test get cities of null state',()=>{
    const cities: ICity[] = City.getAllCitiesOfState(null);
    expect(cities).toEqual([]);
  });

  test('Test get cities of country',()=>{
    const cities: ICity[] = City.getAllCitiesByCountry('IN');
    expect(cities).toEqual(cityList.filter(city => city.countryCode === 'IN'));
  });

  test('Test get cities of null country',()=>{
    const cities: ICity[] = City.getAllCitiesByCountry(null);
    expect(cities).toEqual([]);
  });

}
export { continentTest, subregionTest, countryTest, stateTest,cityTest };

continentTest(Continent);
subregionTest(Subregion);
countryTest(Country);
stateTest(State);
cityTest(City);