import {observable,action} from 'mobx'
import { getEnvironment } from '../service/environment.service';

export default class Environment{
    @observable config=null;
    @observable term=null;

    @action
    fetchEnvironment(){
        this.term=null;
        this.config=null;
        getEnvironment(req=>{
            if(req){
                const {term}=req;
                this.term=term;
            }
            this.config=req;
        })
    }

    @action
    fetchEnvironmentToArray(callback){
        this.term=null;
        this.config=null;
        getEnvironment(req=>{
            if(req){
                const {term}=req;
                this.term=term;
            }
            this.config=req;
            callback(req);
        })
    }
}