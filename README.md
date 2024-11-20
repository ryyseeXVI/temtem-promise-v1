# Temtem API Wrapper 🎮

[![NPM Version](https://img.shields.io/npm/v/temtem-promise-v1)](https://www.npmjs.com/package/temtem-promise-v1)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern TypeScript wrapper for the [Temtem API](https://temtem-api.mael.tech), providing easy access to all Temtem game data.

## 📥 Installation

```sh
npm install temtem-promise-v1
```

🚀 Usage

```ts
import { TemtemAPI } from 'temtem-promise';

const api = new TemtemDex();

// Example: Get all Temtems
const temtems = await api.getTemtems();

// Example: Get a specific Temtem with ID
const temtem = await api.getTemtemById(1);

// Example: Get Temtems with specific parameters
const filteredTemtems = await api.getTemtems({
    names: "Pigepic,Crystle",
    fields: "name,type",
    expand: "evolution",
    weaknesses: true
});
```

📚 Available Methods
- getTemtems(params?: TemtemQueryParams)
- getTemtemById(id: number, params?: TemtemByIdQueryParams)
- getFreetemByTemtemNameAndLevel(name: string, level: number)
- getFreetemsRewards()
- getTypes(params?: TypesQueryParams)
- getConditions(params?: ConditionsQueryParams)
- getTechniques(params?: TechniquesQueryParams)
- getTrainingCourses(params?: TrainingCoursesQueryParams)
- getTraits(params?: TraitsQueryParams)
- getItems(params?: ItemsQueryParams)
- getGear(params?: GearQueryParams)
- getQuests(params?: BasicQueryParams)
- getDojos()
- getCharacters(params?: BasicQueryParams)
- getSaipark(params?: BasicQueryParams)
- getLocations(params?: BasicQueryParams)
- getCosmetics(params?: BasicQueryParams)
- getDyes(params?: BasicQueryParams)
- getPatches(params?: BasicQueryParams)
- getWeaknesses()
- calculateWeaknesses(params: WeaknessCalculateParams)
- getBreeding()

🔍 Query Parameters
All methods that accept parameters support filtering the response using:

- fields: Specify which fields to return
- limit: Limit the number of results
Some endpoints support additional parameters like names, expand, and weaknesses.

🏷️ Used Types/Interfaces
- BasicQueryParams { fields?: string, limit?: number }
- TemtemQueryParams extends BasicQueryParams { names?: string, expand?: string, weaknesses?: boolean }
- TemtemByIdQueryParams { fields?: string, expand?: string, weaknesses?: boolean }
- TechniquesQueryParams extends BasicQueryParams { names?: string }
- TraitsQueryParams extends BasicQueryParams { names?: string }
- TypesQueryParams = BasicQueryParams
- ConditionsQueryParams = BasicQueryParams
- TrainingCoursesQueryParams = BasicQueryParams
- ItemsQueryParams = BasicQueryParams
- GearQueryParams = BasicQueryParams
- WeaknessCalculateParams { attacking: string, defending: string }

📄 License
MIT

🤝 Contributing
This wrapper uses the Temtem API provided by https://temtem-api.mael.tech

# Using his typing package is strongly recommended until its included here.
