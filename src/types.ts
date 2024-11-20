export interface BasicQueryParams {
    fields?: string;
    limit?: number;
}

export interface TemtemQueryParams extends BasicQueryParams {
    names?: string;
    expand?: string;
    weaknesses?: boolean;
}

export interface TemtemByIdQueryParams {
    fields?: string;
    expand?: string;
    weaknesses?: boolean;
}

export interface TechniquesQueryParams extends BasicQueryParams {
    names?: string;
}

export interface TraitsQueryParams extends BasicQueryParams {
    names?: string;
}

export interface WeaknessCalculateParams {
    attacking: string;
    defending: string;
}

export type TypesQueryParams = BasicQueryParams;
export type ConditionsQueryParams = BasicQueryParams;
export type TrainingCoursesQueryParams = BasicQueryParams;
export type ItemsQueryParams = BasicQueryParams;
export type GearQueryParams = BasicQueryParams;
