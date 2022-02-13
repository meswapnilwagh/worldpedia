# 🌏 Worldpedia

> “Worldpedia” is javascript library that will give you access to data of Continents, Subregions, Country, States & Cities
> 

Get a list of countries of specific continents, get a list of states of countries, get a list of cities of states, countries belonging to specific subregion.

<p align="center">
<img src="https://img.shields.io/npm/dw/worldpedia?logo=npm&style=for-the-badge"/>
<img src="https://img.shields.io/npm/v/worldpedia?logo=npm&style=for-the-badge"/>
<img src="https://img.shields.io/github/issues/meswapnilwagh/worldpedia?logo=github&style=for-the-badge"/>

</p>

# ⚙️ Install

`npm i worldpedia`

# 🔭 Usage

```jsx
import  { City, Continent, Country, State, Subregion } from 'worldpedia';
```

## Available modules

1. Continent
2. Subregion
3. Country
4. State
5. City

## Continent

Following functions are available in the continent module

### getAllContinents()

---

This function returns all the available continents
**Type:** `IContinent[ ]`

**Output:**

```jsx
[
    {
        "code": "AF",
        "name": "Africa"
    },
    {
        "code": "AN",
        "name": "Antarctica"
    },
    {
        "code": "AS",
        "name": "Asia"
    },
    {
        "code": "EU",
        "name": "Europe"
    },
    {
        "code": "NA",
        "name": "North america"
    },
    {
        "code": "OC",
        "name": "Oceania"
    },
    {
		    "code": "SA",
        "name": "South america"
    }
]
```

### getContinentByCode(continentCode)

---

This function accept `continentCode` as a parameter and return the single instance of `IContienent` matching with the parameter
**Type:** `IContinent | undefined`

**Output:**

```jsx
{
		"code": "AS",
		"name": "Asia"
}

```

## Subregion

Following function are available in the subregion module

### getAllSubregion()

---

This function returns all the subregions
**Type:** `ISubregion[] | []`

**Output:**

```jsx
[
	{
		"name":  "Southern Asia",
		"continent":  "Asia",
		"continent_code":  "AS"
	},
	{
		"name":  "Northern Europe",
		"continent":  "Europe",
		"continent_code":  "EU"
	},
	...
]

```

### getAllSubregionByContinent(continentCode)

---

This function accepts the `continentCode` as a parameter and returns the list of all subregions belonging to the `continentCode`

**Type:** `ISubregions[] | []`

**Output:**

```jsx
[
    { 
        "name": "Southern Asia", 
        "continent": "Asia", 
        "continent_code": "AS" 
    },
    { 
        "name": "Western Asia", 
        "continent": "Asia", 
        "continent_code": "AS" 
    },
    {
        "name": "South-eastern Asia",
        "continent": "Asia",
        "continent_code": "AS"
    },
    { 
        "name": "Eastern Asia", 
        "continent": "Asia", 
        "continent_code": "AS" 
    },
    { 
        "name": "Central Asia", 
        "continent": "Asia", 
        "continent_code": "AS" 
    }
]
```

## Country

Following function are available in the country module

### getAllCountries()

---

This function returns all the countries

**Type:** `ICountry[] | []`

**Output:** 

```jsx
[
		{
        "id": 1,
        "name": "Afghanistan",
        "iso3": "AFG",
        "iso2": "AF",
        "numeric_code": "004",
        "phone_code": "93",
        "capital": "Kabul",
        "currency": "AFN",
        "currency_name": "Afghan afghani",
        "currency_symbol": "؋",
        "tld": ".af",
        "native": "افغانستان",
        "subregion": "Southern Asia",
        "timezones": [
            {
                "zoneName": "Asia/Kabul",
                "gmtOffset": 16200,
                "gmtOffsetName": "UTC+04:30",
                "abbreviation": "AFT",
                "tzName": "Afghanistan Time"
            }
        ],
        "translations": {
            "kr": "아프가니스탄",
            "br": "Afeganistão",
            "pt": "Afeganistão",
            "nl": "Afghanistan",
            "hr": "Afganistan",
            "fa": "افغانستان",
            "de": "Afghanistan",
            "es": "Afganistán",
            "fr": "Afghanistan",
            "ja": "アフガニスタン",
            "it": "Afghanistan",
            "cn": "阿富汗"
        },
        "latitude": "33.00000000",
        "longitude": "65.00000000",
        "emoji": "🇦🇫",
        "emojiU": "U+1F1E6 U+1F1EB",
        "continent": "Asia",
        "continent_code": "AS"
    }
		...
]
```

### getCountryByCode(code:string)

---

This function accept country code as a parameter and return the single instance of `ICountry` matching with the parameter

**Type:** `ICountry | undefined`

**Output:** 

```jsx

 {
    "name": "India",
    "iso3": "IND",
    "iso2": "IN",
    "numeric_code": "356",
    "phone_code": "91",
    "capital": "New Delhi",
    "currency": "INR",
    "currency_name": "Indian rupee",
    "currency_symbol": "₹",
    "tld": ".in",
    "native": "भारत",
    "subregion": "Southern Asia",
    "timezones": [
        {
            "zoneName": "Asia/Kolkata",
            "gmtOffset": 19800,
            "gmtOffsetName": "UTC+05:30",
            "abbreviation": "IST",
            "tzName": "Indian Standard Time"
        }
    ],
    "translations": {
        "kr": "인도",
        "br": "Índia",
        "pt": "Índia",
        "nl": "India",
        "hr": "Indija",
        "fa": "هند",
        "de": "Indien",
        "es": "India",
        "fr": "Inde",
        "ja": "インド",
        "it": "India",
        "cn": "印度"
    },
    "latitude": "20.00000000",
    "longitude": "77.00000000",
    "emoji": "🇮🇳",
    "emojiU": "U+1F1EE U+1F1F3",
    "continent": "Asia",
    "continent_code": "AS"
}
```

### getAllCountriesByContinent(continentCode: string)

---

This function accept continent code as a parameter and return all countries of the continents

**Type:** `ICountry[] | []`

### getAllCountriesBySubregion(subregion: string)

---

This function accept subregion name as a parameter and return all countries of the subregion

**Type:** `ICountry[] | []`

## State

Following function are available in the state module

### getAllStates()

---

This function returns all the states

**Type:** `IState[] | []`

### getAllStatesByCountry(countryCode: string)

---

This function accept country code as a parameter and return all states of the country

**Type:** `IState[] | []`

### getStateByCodeAndCountry(stateCode: string, countryCode: string)

---

This function accept state iso code and country code as a parameter and return the single instance of the `IState`

**Type:** `IState | undefined`

**Output:**

```jsx
{
    "name": "Maharashtra",
    "isoCode": "MH",
    "countryCode": "IN",
    "latitude": "19.75147980",
    "longitude": "75.71388840"
}
```

## City

Following function are available in the city module

### getAllCities()

---

This function returns all the cities

**Type:** `ICity[] | []`

### getAllCitiesOfState(stateCode: string, countryCode: string)

---

This function accept state Code and country code as a parameter and return all cities of the states.

**Type:** `ICity[] | []`

### getAllCitiesByCountry(countryCode: string)

---

This function accept country code as a parameter and return all cities of the country.

**Type:** `ICity[] | []`

**Output:**

```jsx
[
  {
    name: 'Achalpur',
    countryCode: 'IN',
    stateCode: 'MH',
    latitude: '21.25665000',
    longitude: '77.51006000'
  },
  {
    name: 'Ahiri',
    countryCode: 'IN',
    stateCode: 'MH',
    latitude: '19.41386000',
    longitude: '80.00359000'
  },
  {
    name: 'Ahmadnagar',
    countryCode: 'IN',
    stateCode: 'MH',
    latitude: '19.09457000',
    longitude: '74.73843000'
  }
	...
]
```
# ✍️ How to Contribute
- Clone repo and create a new branch: $ git checkout https://github.com/meswapnilwagh/worldpedia -b branch-name.
- Make changes and test
- Submit Pull Request with comprehensive description of changes

# 👨‍💻 Author
### Swapnil Abhimanyu Wagh

<p align="left">
<a href="https://meswapnilwagh.com" target="blank"><img src="https://img.shields.io/badge/Blog-meswapnilwagh.com-green?style=for-the-badge&logo=hashnode" alt="meswapnilwagh" /></a> 
<a href="https://twitter.com/meswapnilwagh" target="blank"><img src="https://img.shields.io/twitter/follow/meswapnilwagh?logo=twitter&style=for-the-badge" alt="meswapnilwagh" /></a>
</p>