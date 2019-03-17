import { logIn, SignOut, authStateChange, getAccount } from "../service/auth.service";
import { observable, action } from "mobx";

export default class Auth {
  @observable user = null;
  @observable account= null;
  @observable loading = false;
  @observable process = false;
  @observable uid = null;

  @action
  fetchAuthStateChange(callback) {
    this.process = true;
    authStateChange(user => {
      if (user) {
        const { uid } = user;
        this.uid = uid;
        this.user = user
        getAccount(uid, res => {
          this.account = res
          console.log('res', res)
        })
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
