import * as Types from './types';

export * from './types';

export class TemtemDex {
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = 'https://temtem-api.mael.tech/api';
    }

    private async fetchAndParse(endpoint: string, queryParams?: URLSearchParams) {
        const url = `${this.baseUrl}/${endpoint}${queryParams?.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }

    async getTemtems(params?: Types.TemtemQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.names) queryParams.append('names', params.names);
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.expand) queryParams.append('expand', params.expand);
        if (params?.weaknesses) queryParams.append('weaknesses', params.weaknesses.toString());
        return this.fetchAndParse('temtems', queryParams);
    }

    async getTemtemById(id: number, params?: Types.TemtemByIdQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.expand) queryParams.append('expand', params.expand);
        if (params?.weaknesses) queryParams.append('weaknesses', params.weaknesses.toString());
        return this.fetchAndParse(`temtems/${id}`, queryParams);
    }

    async getFreetemByTemtemNameAndLevel(name: string, level: number) {
        return this.fetchAndParse(`freetem/${name}/${level}`);
    }

    async getFreetemsRewards() {
        return this.fetchAndParse('freetem/rewards');
    }

    async getTypes(params?: Types.TypesQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        return this.fetchAndParse('types', queryParams);
    }

    async getConditions(params?: Types.ConditionsQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        return this.fetchAndParse('conditions', queryParams);
    }

    async getTechniques(params?: Types.TechniquesQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.names) queryParams.append('names', params.names);
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        return this.fetchAndParse('techniques', queryParams);
    }

    async getTrainingCourses(params?: Types.TrainingCoursesQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        return this.fetchAndParse('training-courses', queryParams);
    }

    async getTraits(params?: Types.TraitsQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.names) queryParams.append('names', params.names);
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        return this.fetchAndParse('traits', queryParams);
    }

    async getItems(params?: Types.ItemsQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        return this.fetchAndParse('items', queryParams);
    }

    async getGear(params?: Types.GearQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        return this.fetchAndParse('gear', queryParams);
    }

    async getQuests(params?: Types.BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        return this.fetchAndParse('quests', queryParams);
    }

    async getDojos() {
        return this.fetchAndParse('dojos');
    }

    async getCharacters(params?: Types.BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        return this.fetchAndParse('characters', queryParams);
    }

    async getSaipark(params?: Types.BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        return this.fetchAndParse('saipark', queryParams);
    }

    async getLocations(params?: Types.BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        return this.fetchAndParse('locations', queryParams);
    }

    async getCosmetics(params?: Types.BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        return this.fetchAndParse('cosmetics', queryParams);
    }

    async getDyes(params?: Types.BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        return this.fetchAndParse('dyes', queryParams);
    }

    async getPatches(params?: Types.BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        return this.fetchAndParse('patches', queryParams);
    }

    async getWeaknesses() {
        return this.fetchAndParse('weaknesses');
    }

    async calculateWeaknesses(params: Types.WeaknessCalculateParams) {
        const queryParams = new URLSearchParams();
        queryParams.append('attacking', params.attacking);
        queryParams.append('defending', params.defending);
        return this.fetchAndParse('weaknesses/calculate', queryParams);
    }

    async getBreeding() {
        return this.fetchAndParse('breeding');
    }
}

export const TemtemApi = TemtemDex;