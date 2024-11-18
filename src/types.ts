export interface TemtemQueryParams {
    names?: string;
    fields?: string;
    expand?: string;
    weaknesses?: boolean;
}

export interface TemtemByIdQueryParams {
    fields?: string;
    expand?: string;
    weaknesses?: boolean;
}

export interface TypesQueryParams {
    fields?: string;
    limit?: number;
}

export interface ConditionsQueryParams {
    fields?: string;
    limit?: number;
}

export interface TechniquesQueryParams {
    names?: string;
    fields?: string;
    limit?: number;
}

export interface TrainingCoursesQueryParams {
    fields?: string;
    limit?: number;
}

export interface TraitsQueryParams {
    names?: string;
    fields?: string;
    limit?: number;
}

export interface ItemsQueryParams {
    fields?: string;
    limit?: number;
}

export interface GearQueryParams {
    fields?: string;
    limit?: number;
}

export interface BasicQueryParams {
    fields?: string;
    limit?: number;
}

export interface WeaknessCalculateParams {
    attacking: string;
    defending: string;
}