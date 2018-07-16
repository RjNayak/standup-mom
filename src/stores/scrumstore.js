import {EventEmitter} from  'events';
import dispatcher from '../dispatchers/dispatcher.js';

class ScrumStore extends EventEmitter{

constructor(){
  super();
  this.tasks = [

  ]
}
 getAllTasks(){
   return this.tasks;
 }
 createTask(data){
   console.log("create called");
   this.tasks.push(data);
   console.log(JSON.stringify(this.tasks));
   this.emit("change");
 }

 deletetask(index){
    this.tasks.splice(index,1);
    this.emit("change");
 }

 handleAllAction(action){
   console.log("new action recived", action);
   switch (action.type) {
     case "CREATE_TASK":
          this.createTask(action.data);
       break;
       case "DELETE_TASK":
          this.deletetask(action.id,action.data)
       break;
     default:

   }
 }
}

const scrumstore = new ScrumStore();
dispatcher.register(scrumstore.handleAllAction.bind(scrumstore));
export default scrumstore;
