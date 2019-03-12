import { scheduleRef, studentListRef } from "./data.service";
import { pushToArray } from "./mapping.service";

export function getSchedules(termKey,uid,callback){
    scheduleRef(termKey,uid).onSnapshot(snapshot=>{
        callback(pushToArray(snapshot))
    })
}

export function getStudentList(termKey,classKey,callback){
    studentListRef(termKey,classKey).onSnapshot(snapshot=>{
        callback(pushToArray(snapshot))
    })
}