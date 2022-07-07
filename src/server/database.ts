import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, query, where, orderBy } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const db = getFirestore();
const auth = getAuth();

export {
  db,
  auth,
  collection,
  onSnapshot, 
  addDoc, 
  deleteDoc, 
  doc, 
  query, 
  where, 
  orderBy
};