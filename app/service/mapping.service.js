export function pushToObject(snapshot) {
  return { ...snapshot.data(), id: snapshot.id };
}

export function pushToArray(snapshot) {
  return snapshot.docs.map(m => ({ ...m.data(), id: m.id }));
}
