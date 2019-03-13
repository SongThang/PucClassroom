import { logIn, SignOut, authStateChange } from "../service/auth.service";
import { observable, action } from "mobx";

export default class Auth {
  @observable user = null;
  @observable loading = false;
  @observable process = false;
  @observable uid = null;

  @action
  fetchAuthStateChange(callback) {
    this.process = true;
    authStateChange(ref => {
      if (ref) {
        const { uid } = ref;
        this.uid=uid;
        console.log(uid)
        callback(true, uid);
      } else {
        callback(false, null);
      }
    });
  }

  @action
  login(email, password, callback) {
    this.loading = true;
    logIn(email, password)
      .then((req) => {
        callback(true, req);
        this.loading = false;
      })
      .catch(error => {
        callback(false, error);
        this.loading = false;
      });
  }
  @action
  logOut() {
    this.process = true;
    SignOut()
      .then(() => {
        this.process = false;
      })
      .catch(error => {
        this.process = false;
      });
  }
}
