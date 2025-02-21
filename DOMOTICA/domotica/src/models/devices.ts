export class Device {
    nome: string = "";
    state: boolean = false;
    color: string  =   "#B2BEBF";
}


export class Places {
    nome: string = "";
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