export interface CarEntity {
    number: number,
    model: string,
    mark: string,
    year: number
}

export interface OwnerEntity {
    id?: number,
    aFirstName?: string,
    aLastName?: string,
    aMiddleName?: string,
    aCars?: Array<CarEntity>
}