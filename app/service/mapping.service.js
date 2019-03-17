export function pushToObject(snapshot) {
  return { ...snapshot.data(), id: snapshot.id };
}

export function pushToArray(snapshot) {
  return snapshot.docs.map(m => ({ ...m.data(), id: m.id }));
}

export function instructorObj(item){
  const {key,full_name,email,mobile_phone}=item;
  return {
    key,full_name,email,mobile_phone
  }
}
