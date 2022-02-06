import { Continents } from '../index';
import { continentList } from '../db/continentsDb';
test('Get all continents', () => {
  expect(Continents.getAllContinents()).toBe(continentList);
});