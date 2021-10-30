import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getAnalytics } from "@firebase/analytics";

const app = initializeApp(firebaseConfig);
export const init = () => getAnalytics(app);