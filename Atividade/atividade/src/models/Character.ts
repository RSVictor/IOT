export interface Character{
    name: string ;
    height: string;
    peso: string;
    birth_year: string;
    image?: String;
}

export class Space {
    name: string = "";
    persons: Array<Character> = []
}