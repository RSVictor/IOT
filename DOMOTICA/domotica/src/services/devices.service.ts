import {getCdn,getApi} from "./service.config";

export const getDevices =()=>{
    
    getCdn().get("?content_type=device")
}