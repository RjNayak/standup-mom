import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import './App.css';
import * as scrumactions from './actions/scrumactions.js';
import scrumstore from './stores/scrumstore.js';
import $ from 'jquery';
import Autosuggest from 'react-autosuggest';
import IconButton from 'material-ui/IconButton';


const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'C++',
    year: 1983
  },
  {
    name: 'Clojure',
    year: 2007
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'Go',
    year: 2009
  },
  {
    name: 'Haskell',
    year: 1990
  },
  {
    name: 'Java',
    year: 1995
  },
  {
    name: 'JavaScript',
    year: 1995
  },
  {
    name: 'Perl',
    year: 1987
  },
  {
    name: 'PHP',
    year: 1995
  },
  {
    name: 'Python',
    year: 1991
  },
  {
    name: 'Ruby',
    year: 1995
  },
  {
    name: 'Scala',
    year: 2003
  }
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_special_characters
const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion =>
  <span className="listContent">
    {suggestion.name}
  </span>;

class Addtask extends Component {
  constructor(props) {
   super(props);
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.state = {
     formFields: {},
     value: '',
     suggestions: getSuggestions('')
   };
 }
 onChange = (event, { newValue }) => {
   this.setState({
     value: newValue
   });
 };

 onSuggestionsFetchRequested = ({ value }) => {
  this.setState({
    suggestions: getSuggestions(value)
  });
};

// Autosuggest will call this function every time you need to clear suggestions.
onSuggestionsClearRequested = () => {
  this.setState({
    suggestions: []
  });
};

onSuggestionsFetchRequested = ({ value }) => {
  this.setState({
    suggestions: getSuggestions(value)
  });
};

onSuggestionsClearRequested = () => {
  this.setState({
    suggestions: []
  });
};
  handleChange(e) {
     let data = {
       id : this.refs.taskid.getValue(),
       name : this.refs.taskname.getValue(),
       asignee : this.refs.taskasignee.getValue()
     }
     this.setState({formFields: data});
     console.log("State:" + JSON.stringify(this.state.formFields));
     //console.log($('.cardHeader').prop('className'));
   }

   handleSubmit(e){
       scrumactions.createtask(this.state.formFields);
       this.refs.taskid.value=" ";
       this.refs.taskname.value=" ";
       this.refs.taskasignee.value=" ";
   }

   componentWillMount() {
     scrumstore.on("change", (data) => {
       this.setState(
         {
           formFields:data
         }
       )
     });
   }

render(){
  const { value, suggestions } = this.state;
  const inputProps = {
    placeholder: "Type for suggestion",
    value,
    onChange: this.onChange
  };
  return(
    <MuiThemeProvider>
      <Card className="card">
        <CardHeader className="cardHeader"
          title="Add task"
        />
        <CardText>
         <form className="addform">

              <TextField ref="taskid" onChange={this.handleChange}  hintText="Task ID"/><br/><br/>
              <TextField ref="taskname" onChange={this.handleChange} hintText="Task Name"/><br/><br/>
              <TextField ref="taskasignee" onChange={this.handleChange} hintText="Assign To" /> <br/><br/>
      <TextField>
    
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      </TextField>
        </form>
        </CardText>
        <CardActions>
          <FlatButton onClick={this.handleSubmit}
          label="Add"
          secondary={true}/>
        </CardActions>
      </Card>
      </MuiThemeProvider>

  );
}
}

export default Addtask;
