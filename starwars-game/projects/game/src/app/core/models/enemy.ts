export interface EnemyDto {
    id: number;
    name: string;
}

// ssi règles fonctionnelles
export class Enemy implements EnemyDto {
    id !: number;
    name !: string;

    constructor(dto: EnemyDto) {
        this.id = dto.id;
        this.name = dto.name;
    }

}
