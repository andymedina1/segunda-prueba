import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCkDjdfEITuwjXXyNFuNKgRLvNy2eMFLzc',
  authDomain: 'proyecto-react-coderhous-7fb9a.firebaseapp.com',
  projectId: 'proyecto-react-coderhous-7fb9a',
  storageBucket: 'proyecto-react-coderhous-7fb9a.appspot.com',
  messagingSenderId: '866949862759',
  appId: '1:866949862759:web:8eebe0b4299dac2b0ecbc2'
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db
