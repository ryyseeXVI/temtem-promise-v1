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

        const url = `${this.baseUrl}/temtems/${id}${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getFreetemByTemtemNameAndLevel(name: string, level: number) {
        const response = await fetch(`${this.baseUrl}/freetem/${name}/${level}`);
        return await response.json();
    }

    async getFreetemsRewards() {
        const response = await fetch(`${this.baseUrl}/freetem/rewards`);
        return await response.json();
    }

    async getTypes(params?: Types.TypesQueryParams) {
        const queryParams = new URLSearchParams();
        
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());

        const url = `${this.baseUrl}/types${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getConditions(params?: Types.ConditionsQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/conditions${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getTechniques(params?: Types.TechniquesQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.names) queryParams.append('names', params.names);
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/techniques${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getTrainingCourses(params?: Types.TrainingCoursesQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/training-courses${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getTraits(params?: Types.TraitsQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.names) queryParams.append('names', params.names);
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/traits${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getItems(params?: Types.ItemsQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/items${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getGear(params?: Types.GearQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/gear${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getQuests(params?: Types.BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/quests${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getDojos() {
        const response = await fetch(`${this.baseUrl}/dojos`);
        return await response.json();
    }

    async getCharacters(params?: Types.BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/characters${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getSaipark(params?: Types.BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/saipark${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getLocations(params?: Types.BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/locations${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getCosmetics(params?: Types.BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/cosmetics${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getDyes(params?: Types.BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/dyes${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getPatches(params?: Types.BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/patches${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getWeaknesses() {
        const response = await fetch(`${this.baseUrl}/weaknesses`);
        return await response.json();
    }

    async calculateWeaknesses(params: Types.WeaknessCalculateParams) {
        const queryParams = new URLSearchParams();
        queryParams.append('attacking', params.attacking);
        queryParams.append('defending', params.defending);
        
        const url = `${this.baseUrl}/weaknesses/calculate?${queryParams.toString()}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getBreeding() {
        const response = await fetch(`${this.baseUrl}/breeding`);
        return await response.json();
    }
}

export const TemtemApi = TemtemDex;