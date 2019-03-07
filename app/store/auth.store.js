
import { logIn, SignOut } from '../service/auth.service';
import { observable, action } from 'mobx';

export default class Auth{
    @observable user=null;
    @observable loading=false;
    @observable process=false

    @action
    login(email, password,callback){
        this.loading=true;
        logIn(email, password).then(rea=>{
            callback(true,rea)
            this.loading=false;
        }).catch(error=>{
            callback(false,error)
            this.loading=false;
        })
    }
    @action
    logOut(){
        this.process=true;
        SignOut().then(()=>{
            this.process=false;
        }).catch(error=>{
            this.process=false;
        })
    }
}