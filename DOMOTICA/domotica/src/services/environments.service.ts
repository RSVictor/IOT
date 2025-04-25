import { Device, Environment, EnvironmentResponse, type ApiResponse } from "@/models/devices";
import { getCdn, getApi } from "./services.config";

export const getEnvironments = (): Promise<ApiResponse<Environment,Device>>=> {
    return getCdn().get("/?content_type=Enviroment");
}

export const saveEvironment = (env:NewEnvironment): Promise<void>=> {    
    return getApi().post("/", env,{
        headers:{
            'X-Contentful-Content-Type': 'Environment'
        }
    });
}

