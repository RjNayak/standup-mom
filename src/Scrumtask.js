import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import './App.css';
import * as scrumactions from './actions/scrumactions.js';
import scrumstore from './stores/scrumstore.js';

class TaskCard extends Component {

  constructor(props) {
   super(props);
   this.handleDelete = this.handleDelete.bind(this);
 }

  handleDelete(e){
    console.log(e);
    //console.log(JSON.stringify(this.refs);
    scrumactions.deletetask(this.props.index);
  }

  render(){
    let name = this.props.name
    let id = this.props.id
    let asignee = this.props.asignee
    let hours = this.props.hours
    let asigndate = this.props.asigndate
    let completiondate = this.props.completiondate
    return(
      <MuiThemeProvider>
      <Card className="card">
        <CardHeader className="cardHeader"
          title={asignee}
          avatar="images/profile-pictures.png"
        />
        <CardText className="cardTextElement">
        <ul className="cardTextContainer">
        <li><span className="cardText">Task ID: {id}</span></li>
        <li><span className="cardText">Task Name: {name}</span></li>
        <li><span className="cardText">Asigned Hours: {hours}</span></li>
        <li><span className="cardText">Asigned Date:{asigndate}</span></li>
        <li><span className="cardText">Scheduled Completion Date: {completiondate}</span></li>
        </ul>
        </CardText>
        <CardActions>
          <FlatButton
          label="EDIT"
          secondary={true}
          icon={<FontIcon className="muidocs-icon-custom-github" />}/>
          <FlatButton ref="deleteButton"
          label="DELETE" onClick={this.handleDelete}
          secondary={true}
          icon={<FontIcon className="muidocs-icon-custom-github" />} />
        </CardActions>
      </Card>
      </MuiThemeProvider>
    );
  }
}

export default TaskCard;
