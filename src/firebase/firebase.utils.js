import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDOKVwdnkn6mAdUEKidsO9n1rxSixwC-II",
  authDomain: "chef-to-table.firebaseapp.com",
  databaseURL: "https://chef-to-table.firebaseio.com",
  projectId: "chef-to-table",
  storageBucket: "chef-to-table.appspot.com",
  messagingSenderId: "771840948429",
  appId: "1:771840948429:web:16941218fb31698e9d1184",
  measurementId: "G-PWS93LWVN6"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = db.doc(`users/${ userAuth.uid }`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('***error creating user***\n', error.message)
    }
  }

  return userRef
}


export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const db = firebase.firestore()


export default firebase