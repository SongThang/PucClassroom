import { authRef, instructorRef } from "./data.service";
import { auth } from "react-native-firebase";
import { pushToObject } from "./mapping.service";

export function authStateChange(callback){
    auth().onAuthStateChanged(user=>{
        if(user){
            callback(user)
        } else{
            callback(null)
        }
    })
}

export function logIn(email,password){
    return authRef().signInWithEmailAndPassword(email,password)
}
export function getAccount(uid,callback){
    return instructorRef(uid).onSnapshot(docs=>{
        callback(pushToObject(docs))
    })
}

export function signOut(){
    return auth().signOut();
}