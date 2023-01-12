import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import { throw_err } from "../helpers/throw_err.js";
import user_schema from "../schema/User.js";
import { v4 as uuidv4 } from "uuid";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase_config = {
  apiKey: "AIzaSyBw_iSpDopbvgkyaXWiEjkf28uoIdTDPnY",
  authDomain: "chess-24c73.firebaseapp.com",
  projectId: "chess-24c73",
  storageBucket: "chess-24c73.appspot.com",
  messagingSenderId: "173816910133",
  appId: "1:173816910133:web:b4ad73167b0feb6e613c7c",
  measurementId: "G-CXCEY5345Q",
};

// Initialize Firebase
const app = initializeApp(firebase_config);
const analytics = getAnalytics(app);
const auth = getAuth();
const firestore = getFirestore();
const storage = getStorage();
console.log(firestore);

export const signup = (fname, lname, username, email, password, callback) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      logEvent(analytics, "sign_up", {
        id: user.user.uid,
      });
      setDoc(
        doc(firestore, "users", `${user.user.uid}`),
        user_schema(fname, lname, username, email, user.user.uid)
      ).then(() => {
        callback();
      });
    })
    .catch((err) => {
      throw err;
    });
};

export function UseAuth() {
  const [current_user, set_current_user] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const docRef = doc(firestore, "users", `${user.uid}`);
        getDoc(docRef).then((user) => {
          if (user.exists()) {
            set_current_user(user.data());
          } else {
            console.log("No such document!");
          }
        });
      }
      console.log(user);
    });
    return unsub;
  }, []);
  return current_user;
}

export function get_puzzle() {
  console.log(ref(storage, ""));
}

export function sign_out() {
  signOut(auth)
    .then(() => {
      console.log("signed out");
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
}

export const login = (email, password, callback) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      callback(false);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      callback([errorCode, errorMessage]);
    });
};

export const send_message = (receiver_id, message) => {
  console.log(receiver_id);
  const docRef = doc(firestore, "users", receiver_id);
  getDoc(docRef)
    .then((user) => {
      if (user.exists()) {
        const inbox = user.data.inbox;
        inbox.getChat(receiver_id).addNewMessage(message);
        updateDoc(docRef, {
          inbox: inbox,
        });
      } else {
        console.log("No such document!");
      }
    })
    .catch((err) => {
      throw_err(err.code, err.message);
    });
};

export const get_all_users = () => {
  const val = [];
  getDocs(collection(firestore, "users")).then((users) => {
    users.forEach((user) => {
      val.push(user.data());
    });
  });
  return val;
};

export const change_trainer_rating = (uid, newRating) => {
  const ref = doc(firestore, "users", uid);

  updateDoc(ref, {
    trainer: newRating,
  })
    .then(() => {
      console.log("trainer rating updated");
      logEvent(analytics, "rating_update", {
        id: uid,
        new_rating: newRating,
      });
    })
    .catch((err) => {
      throw_err(err.code, err.message);
    });
};

export const change_runner_rating = (uid, newRating) => {
  const ref = doc(firestore, "users", uid);

  updateDoc(ref, {
    runner: newRating,
  })
    .then(() => {
      console.log("runner rating updated");
      logEvent(analytics, "rating_update", {
        id: uid,
        new_rating: newRating,
      });
    })
    .catch((err) => {
      throw_err(err.code, err.message);
    });
};

export const change_battle_rating = (uid, newRating) => {
  const ref = doc(firestore, "users", uid);

  updateDoc(ref, {
    battle: newRating,
  })
    .then(() => {
      console.log("battle rating updated");
      logEvent(analytics, "rating_update", {
        id: uid,
        new_rating: newRating,
      });
    })
    .catch((err) => {
      throw_err(err.code, err.message);
    });
};

export const register_game = (
  white,
  black,
  moves,
  fens,
  pgn,
  length,
  result,
  reason,
  white_old_rating,
  black_old_rating,
  white_new_rating,
  black_new_rating,
  minutes,
  seconds,
  increment,
  mode,
  callback
) => {
  const ref = doc(firestore, "users", white);
  const ref2 = doc(firestore, "users", black);

  if (mode === "bullet") {
    updateDoc(ref, {
      bullet: white_new_rating,
    });
    updateDoc(ref2, {
      bullet: black_new_rating,
    });
  } else if (mode === "blitz") {
    updateDoc(ref, {
      blitz: white_new_rating,
    });
    updateDoc(ref2, {
      blitz: black_new_rating,
    });
  } else if (mode === "rapid") {
    updateDoc(ref, {
      rapid: white_new_rating,
    });
    updateDoc(ref2, {
      rapid: black_new_rating,
    });
  } else if (mode === "classical") {
    updateDoc(ref, {
      classical: white_new_rating,
    });
    updateDoc(ref2, {
      classical: black_new_rating,
    });
  }
  setDoc(doc(firestore, "games", `${uuidv4()}`), {
    white: white,
    black: black,
    moves: moves,
    fens: fens,
    pgn: pgn,
    length: length,
    result: result,
    reason: reason,
    white_old_rating: white_old_rating,
    white_new_rating: white_new_rating,
    black_new_rating: black_new_rating,
    black_old_rating: black_old_rating,
    mode: mode,
    minutes: minutes,
    seconds: seconds,
    increment: increment,
  }).then(() => {
    logEvent(analytics, "register_game", {
      white: white,
      black: black,
      mode: mode,
    });

    callback();
  });
};

export const get_new_puzzle = (puzzle) => {
  logEvent(analytics, "new_puzzle", {
    puzzle: puzzle,
  });
};

export const get_games = (uid) => {
  const q = query(collection(firestore, "games"), where("uid", "==", uid));
  const games = [];
  getDocs(q).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  });
  return games;
};
