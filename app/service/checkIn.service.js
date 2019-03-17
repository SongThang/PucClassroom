import { batch, termRef, studentDbRef } from "./data.service";
import { instructorObj } from './mapping.service';

export function setCheckIn(checkIn) {
    console.log(checkIn);
    const { key, term, schedule_subject, session, secendarySession, classKey, room, secendaryRoom, checkDateKey, instructor, checkDate, status, student } = checkIn;
    // const instru=instructorObj(instructor);
    const checkAttendance = {
        key,
        schedule_subject,
        session,
        secendarySession,
        classKey,
        room,
        secendaryRoom,
        checkDateKey,
        instructor: instructorObj(instructor),
        checkDate,
        status
    };
    console.log('checkAttendance', checkAttendance)
    const tran = batch();
    const checkInRef = termRef(term.key).collection("schedules").doc(classKey).collection("students").doc(student.key);
    const movementRef = studentDbRef().doc(student.key).collection("term").doc(term.key).collection("attendaces").doc(key)
    const studentCheckIn = {
        checkDate,
        checkDateKey,
        status,
        key,
    };
    tran.set(movementRef, checkAttendance);
    tran.update(checkInRef, { [checkDateKey]: studentCheckIn })
    return tran;
}