import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB1nJ9ir6f2naQnCpKYVh1bX9u6wv04H8I',
  authDomain: 'happychat-dde73.firebaseapp.com',
  projectId: 'happychat-dde73',
  storageBucket: 'happychat-dde73.appspot.com',
  messagingSenderId: '329453562853',
  appId: '1:329453562853:web:e736ffec82ad1fb3cf1d0c',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
