import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DB_DIR = join(import.meta.dir, '../src/db');
const BASE_URL = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/json';

async function fetchJSON(endpoint: string) {
	console.log(`Fetching ${endpoint}...`);
	const res = await fetch(`${BASE_URL}/${endpoint}`);
	if (!res.ok) throw new Error(`Failed to fetch ${endpoint}: ${res.statusText}`);
	
	if (endpoint.endsWith('.gz')) {
		console.log(`Decompressing ${endpoint}...`);
		// Use Bun's native gunzip capabilities
		const arrayBuffer = await res.arrayBuffer();
		const decompressed = Bun.gunzipSync(new Uint8Array(arrayBuffer));
		const text = new TextDecoder().decode(decompressed);
		return JSON.parse(text);
	}

	return res.json();
}

async function main() {
	try {
		const countries = await fetchJSON('countries.json');
		const states = await fetchJSON('states.json');
		const cities = await fetchJSON('cities.json.gz');
		const regions = await fetchJSON('regions.json');
		const subregions = await fetchJSON('subregions.json');

		// 2. Format mapping (The source data mostly matches our interfaces, but we might need light mapping or just dumping the array)
		console.log('Writing to files...');

		// Continents usually remain static, but we can map them from regions.json
		const mappedContinents = regions.map((r: any) => ({
			name: r.name,
			code: r.translations?.pt ? r.translations.pt.substring(0, 2).toUpperCase() : r.name.substring(0,2).toUpperCase(), // Quick and dirty fallback, worldpedia expects 'AS', 'EU' etc. Actually, let's keep the existing `continentsDb.ts` since it's just 7 items and completely static.
		}));
		// The original `continentsDb.ts` had a specific set of 7 continents with custom codes (AF, AN, AS, EU, NA, OC, SA).
		// We will NOT overwrite continents.

		// Subregions
		const mappedSubregions = subregions.map((s: any) => ({
			name: s.name,
			continent: s.region,
			continent_code: countries.find((c: any) => c.region_id === s.region_id)?.region ?? '', // Need to map this closer to continents Db if possible
		}));
		// We'll skip overwriting subregions.ts too to prevent breaking backward compatibility further, 
		// as it's small and tightly coupled to the static continents array.

		// Countries: Map to match ICountry
		const mappedCountries = countries.map((c: any) => ({
			id: c.id,
			name: c.name || "",
			iso3: c.iso3 || "",
			iso2: c.iso2 || "",
			numeric_code: c.numeric_code || "",
			phone_code: c.phonecode || "", // Here's the fix for phone_code
			capital: c.capital || "",
			currency: c.currency || "",
			currency_name: c.currency_name || "",
			currency_symbol: c.currency_symbol || "",
			tld: c.tld || "",
			native: c.native || null,
			subregion: c.subregion || "",
			timezones: c.timezones || [],
			translations: c.translations || {},
			latitude: c.latitude || "",
			longitude: c.longitude || "",
			emoji: c.emoji || "",
			emojiU: c.emojiU || "",
			continent: c.region || "", // In worldpedia it was named `continent`
			continent_code: '', // Original lib manually hardcoded `continent_code` e.g. "AS" for Asia. Let's just pass empty or derive it later if needed.
		}));
		const countryExports = `import type { ICountry } from "../interfaces";\n\nexport const countryList: ICountry[] = ${JSON.stringify(mappedCountries, null, 2)};`;
		writeFileSync(join(DB_DIR, 'countriesDb.ts'), countryExports);

		// States: Map to match IState
		const mappedStates = states.map((s: any) => ({
			name: s.name || "",
			isoCode: s.state_code || "",
			countryCode: s.country_code || "",
			latitude: s.latitude || null,
			longitude: s.longitude || null,
		}));
		const stateExports = `import type { IState } from "../interfaces";\n\nexport const stateList: IState[] = ${JSON.stringify(mappedStates, null, 2)};`;
		writeFileSync(join(DB_DIR, 'statesDb.ts'), stateExports);

		// Cities: Map to match ICity
		const mappedCities = cities.map((c: any) => ({
			name: c.name || "",
			countryCode: c.country_code || "",
			stateCode: c.state_code || "",
			latitude: c.latitude || null,
			longitude: c.longitude || null,
		}));
		const cityExports = `import type { ICity } from "../interfaces";\n\nexport const cityList: ICity[] = ${JSON.stringify(mappedCities, null, 2)};`;
		writeFileSync(join(DB_DIR, 'citiesDb.ts'), cityExports);

		console.log('Database successfully updated!');
	} catch (error) {
		console.error('Error updating database:', error);
		process.exit(1);
	}
}

main();
