import firebase from "react-native-firebase";
const db=firebase.firestore();

export function authRef(){
    return firebase.auth()
}

export function environmentRef(){
    return db.collection("academic_environment").doc("academic_environment")
}

export function scheduleRef(termKey,uid){
    return db.collection("academics_term").doc(termKey).collection("schedules")
    .where("instructor.key","==",uid);
}

export function studentListRef(termKey,classKey){
    return db.collection("academics_term").doc(termKey).collection("schedules")
    .doc(classKey).collection("students");
    
}