
import db from '../db/firestore'
import { collection, getDocs } from 'firebase/firestore';
 
export async function fetchChats()
{
  const chatCol = collection(db, 'chat');
  const chatSnap = await getDocs(chatCol);
  const chatList = chatSnap.docs.map(doc => ({id: doc.id, ...doc.data()}));

  return chatList;
}
