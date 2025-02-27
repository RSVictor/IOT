export class Device {
    name: string = "";
    state: boolean = false;
    color: string  =   "#B2BEBF";
}


export class Environment {
    name: string = "";
    state: Array<Device> = []
}



/*
export type Places {
    nome: string,
    devices: Array<Device>
}

export interface PlacesInterface{
    nome: string,
    devices: Array<Device>
}

export class PlacesClass{
    nome: String = "";
    devices: Array<Device> = [];
}
    */