interface TemtemQueryParams {
    names?: string;
    fields?: string;
    expand?: string;
    weaknesses?: boolean;
}

interface TemtemByIdQueryParams {
    fields?: string;
    expand?: string;
    weaknesses?: boolean;
}

interface TypesQueryParams {
    fields?: string;
    limit?: number;
}

interface ConditionsQueryParams {
    fields?: string;
    limit?: number;
}

interface TechniquesQueryParams {
    names?: string;
    fields?: string;
    limit?: number;
}

interface TrainingCoursesQueryParams {
    fields?: string;
    limit?: number;
}

interface TraitsQueryParams {
    names?: string;
    fields?: string;
    limit?: number;
}

interface ItemsQueryParams {
    fields?: string;
    limit?: number;
}

interface GearQueryParams {
    fields?: string;
    limit?: number;
}

interface BasicQueryParams {
    fields?: string;
    limit?: number;
}

interface WeaknessCalculateParams {
    attacking: string;
    defending: string;
}

export class TemtemAPI {
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = 'https://temtem-api.mael.tech/api';
    }

    async getTemtems(params?: TemtemQueryParams) {
        const queryParams = new URLSearchParams();
        
        if (params?.names) queryParams.append('names', params.names);
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.expand) queryParams.append('expand', params.expand);
        if (params?.weaknesses) queryParams.append('weaknesses', params.weaknesses.toString());

        const url = `${this.baseUrl}/temtems${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getTemtemById(id: number, params?: TemtemByIdQueryParams) {
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

    async getTypes(params?: TypesQueryParams) {
        const queryParams = new URLSearchParams();
        
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());

        const url = `${this.baseUrl}/types${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getConditions(params?: ConditionsQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/conditions${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getTechniques(params?: TechniquesQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.names) queryParams.append('names', params.names);
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/techniques${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getTrainingCourses(params?: TrainingCoursesQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/training-courses${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getTraits(params?: TraitsQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.names) queryParams.append('names', params.names);
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/traits${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getItems(params?: ItemsQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/items${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getGear(params?: GearQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/gear${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getQuests(params?: BasicQueryParams) {
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

    async getCharacters(params?: BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/characters${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getSaipark(params?: BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/saipark${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getLocations(params?: BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/locations${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getCosmetics(params?: BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/cosmetics${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getDyes(params?: BasicQueryParams) {
        const queryParams = new URLSearchParams();
        if (params?.fields) queryParams.append('fields', params.fields);
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        
        const url = `${this.baseUrl}/dyes${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url);
        return await response.json();
    }

    async getPatches(params?: BasicQueryParams) {
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

    async calculateWeaknesses(params: WeaknessCalculateParams) {
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
