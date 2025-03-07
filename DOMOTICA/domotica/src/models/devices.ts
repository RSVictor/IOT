export class Device {
    name: string = "";
    state: boolean = false;
    color: string = "#827d85";
    icon: string = "device";
}

export class Environment {
    name: string = "";
    devices: Array<Device> = []
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