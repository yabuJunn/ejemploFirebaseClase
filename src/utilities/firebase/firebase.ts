import { firebaseConfiguration } from "./firebaseConfiguration";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs} from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = firebaseConfiguration

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
console.log(db)

export const saveUser = async (user: string, password: string) => {
    const docRef = await addDoc(collection(db, "users"), {
        user: user,
        password: password
    });
    console.log("Document written with ID: ", docRef.id);
}

export const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
}
