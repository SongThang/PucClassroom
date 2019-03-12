import { observable, action } from "mobx";
import { getSchedules, getStudentList } from "../service/schedule.service";

export default class Schedule {
  @observable loading = false;
  @observable empty = false;
  @observable process = false;
  @observable data = null;
  @observable studentList = null;

  @action
  fetchData(termKey, uid) {
    this.loading = true;
    getSchedules(termKey, uid, req => {
      this.empty = req.length === 0;
      this.data = req;
      this.loading = false;
    });
  }

  @action
  fetchStudentList(termKey, classKey) {
    this.loading = true;
    getStudentList(termKey, classKey, req => {
      this.empty = req.length === 0;
      console.log('req', req)
      this.studentList = req;
      this.loading = false;
    });
  }
}
