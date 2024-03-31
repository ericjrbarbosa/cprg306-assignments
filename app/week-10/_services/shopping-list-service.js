import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore";

export const getItems = async ({ userId }) => {
  const q = query(collection(db, "users", userId, "items"));
  const querySnapshot = await getDocs(q);

  const items = [];

  querySnapshot.forEach((doc) => {
    items.push({
      ...doc.data(),
      uid: doc.id,
    });
  });

  return items;
};

export const addItem = async ({ userId, item }) => {
  const docRef = await addDoc(collection(db, "users", userId, "items"), item);
  return docRef.id;
};

export const deleteItem = async ({ userId, item }) => {
  const docRef = doc(db, "users", userId, "items", item.uid);
  const res = await deleteDoc(docRef);
};
