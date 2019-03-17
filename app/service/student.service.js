import { studentRef } from "./data.service";
import { pushToArray } from "./mapping.service";

export function getStudentKey(termKey,classKey,key){
    studentRef(termKey,classKey,key).onSnapshot(snapshot=>{
        callback(pushToArray(snapshot))
})
}