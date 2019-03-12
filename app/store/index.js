import Auth from "./auth.store";
import Environment from "./environment.store";
import Schedule from "./schedule.store";

export default Store={
    auth: new Auth(),
    environment:new Environment(),
    schedule:new Schedule()
}