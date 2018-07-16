import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskCard from './Scrumtask';
import BacklogList from './Backlog.js';
import Addtask  from './AddTask.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Scrum borad</h2>
        </div>
        <p></p>
        <table>
        <tbody>
          <tr>
          <td>
          <span>BACKLOG</span>
          <br/>
          <BacklogList/>
          </td>
          <td>
          <span>IN PROGRESS</span>
          <br/>

          </td>
          <td>
          <span>COMPLETED</span>
          <br/>

          </td>
          <td><Addtask/></td>
          </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

export default App;
