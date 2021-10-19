import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseApp from "../firebase/firebase.init";

initializeFirebaseApp()

const useFirebase = () =>{
   const auth = getAuth();
   const [user, setUser] = useState({})
   const [error, setError] = useState("")
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   // Login with Email and Password
   const loginWithEmail = ()=>{
      signInWithEmailAndPassword(auth, email, password)
         .then(result =>{
            const user = result.user
            setEmail(user)
         }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            (setError(errorMessage));
         });
   }
  

   
   // Login with google
   const loginWithGoogle = () =>{
      const googleProvider = new GoogleAuthProvider();
      signInWithPopup(auth, googleProvider)
      .then((result) => {
         const user = result.user;
         (setUser(user));
      }).catch((error) => {
         // Handle Errors here.
         const errorMessage = error.message;
         (setError(errorMessage));
      });
   }
   useEffect(()=>{
      // On Auth State Change
      onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user)
         } else {
            setError("")
         }
      });
   }, [])

   // Sign Out
   const handleSignOut = ()=>{
      signOut(auth).then(() => {
         setUser({})
       }).catch((error) => {
         setError("")
       });
   }

   return { loginWithGoogle, user, error, handleSignOut, loginWithEmail }
}

export default useFirebase;