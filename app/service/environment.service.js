import { environmentRef } from "./data.service";
import { pushToObject } from "./mapping.service";

export function getEnvironment(callback){
    environmentRef().onSnapshot(doc=>{
        callback(pushToObject(doc))
    })
}