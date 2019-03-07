import { authRef } from "./data.service";
import { auth } from "react-native-firebase";

export function logIn(email,password){
    return authRef().signInWithEmailAndPassword(email,password)
}
export function SignOut(){
    return auth().SignOut();
}