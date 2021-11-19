// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const environment = {
  production: false
};


const firebaseConfig = {
  apiKey: "AIzaSyBHqmnNlBWOjMLJjdSbmFwyD8H8IBjmgBk",
  authDomain: "piecode-43cba.firebaseapp.com",
  databaseURL: "https://piecode-43cba-default-rtdb.firebaseio.com",
  projectId: "piecode-43cba",
  storageBucket: "piecode-43cba.appspot.com",
  messagingSenderId: "555706631709",
  appId: "1:555706631709:web:771ddc3c30e51bf019a8f4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
