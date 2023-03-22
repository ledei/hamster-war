import { MongoClient } from "mongodb";

let db = undefined;
const appDatabaseName = "Hamsterwars";
const username = "*******";
const password = "*******************";

export function fetchCollection(name) {
  return fetchDatabase().collection(name);
}

function fetchDatabase() {
  if (db != undefined) {
    return db;
  }

  const url = `********************************************`;
  const client = new MongoClient(url);

  db = client.db(appDatabaseName); // Samling av collections (skapas dynamisk, har ej skapats explicit i atlas)

  return db;
}
