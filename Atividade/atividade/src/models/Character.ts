export class Character{
    name: string = "";
    idade: number = 0;
    altura: number = 0;
    icon: string = "person"
}

export class Space {
    name: string = "";
    persons: Array<Character> = []
}