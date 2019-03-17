import firebase from "react-native-firebase";
const db=firebase.firestore();

export function authRef(){
    return firebase.auth()
}
export function instructorRef(uid){
    return db.collection("instructors").doc(uid);
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

//Check In service
export function batch(){
    return db.batch();
}
export function termRef(key){
    return db.collection("academics_term").doc(key)
}
export function attendanceRef(key,termKey){
    return db.collection("students").doc(key).collection("term").doc(termKey).collection("attendance")
}
export function studentRef(termKey,classKey,key){
    return db.collection("academics_term").doc(termKey).collection("schedules")
    .doc(classKey).collection("students").doc(key);
}
// function ngeak stoun ouk dach tuk // fake collection generate id but not create id
export function createId(){
    return db.collection("students").doc().id;
}
export function studentDbRef(){
    return db.collection("students")
}