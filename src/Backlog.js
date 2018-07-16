import React, { Component } from 'react';
import TaskCard from './Scrumtask.js';
import scrumstore from './stores/scrumstore.js'

class BacklogList extends Component {
  constructor(){
    super();
    this.state = {
      tasks : scrumstore.getAllTasks(),

    }

  }
  componentWillMount() {
    scrumstore.on("change",  () => {
      this.setState(
        {
          tasks : scrumstore.getAllTasks(),
        }
      )
    });
  }
  render(){

    return(

      <div>
      <ul>
       {this.state.tasks.map((item,index) => (
         <TaskCard key={item.id} id={item.id} name={item.name} asignee={item.asignee} index={index}/>
       ))}
       <br/>
       </ul>
      </div>

    );
  }
}

export default BacklogList;
