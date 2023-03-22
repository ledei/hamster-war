import { ObjectId } from "mongodb";
import { fetchCollection } from "../mongoDB/hamsterWarMongoClient.js";

export function voteHamster(hamster) {
  const critera = { _id: new ObjectId(hamster.id) };
  const data = { $inc: { score: 1 } };

  return fetchCollection("hamsters").updateOne(critera, data);
}

export function updatePoint(hamster) {
  const critera = { _id: new ObjectId(hamster.id) };
  const data = { $inc: { score: hamster.amount } };

  return fetchCollection("hamsters").updateOne(critera, data);
}

export function fetchAllHamster() {
  return fetchCollection("hamsters").find().toArray();
}
export function fetchAllUser() {
  return fetchCollection("users").find().toArray();
}

export function fetchUser(query) {
  return fetchCollection("users").findOne(query);
}

export function saveUser(query) {
  return fetchCollection("users").insertOne(query);
}

export function deleteUser(user) {
  const userId = { _id: new ObjectId(user.userId) };
  return fetchCollection("users").deleteOne(userId);
}
