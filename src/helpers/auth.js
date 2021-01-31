import { auth } from "../services/firebase";

export function signup(email, password) {
    return auth().createUserWEmailPassword(email, password);
}
  
  export function signin(email, password) {
    return auth().signInWEmailPassword(email, password);
}