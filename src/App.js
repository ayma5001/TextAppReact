
import './App.css';
import React, { Component } from 'react';


  class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  
  handleSubmit(event) {
     event.preventDefault();
        this.setState({
          submit:this.state.input
        });
       }

  render() {
    return (
   
    <div class = "container-fluid">
      <h1 id="text-app"><em>Text App</em></h1>
      <form class = "form-control" onSubmit = {this.handleSubmit}>
          <div class="form-group">
            <label for="exampleInputText">Enter your text</label>
            <input value = {this.state.input} onChange = {this.handleChange} type="text" class="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder="Enter your text"/>
            <small id="textHelp" class="form-text text-muted">The text will be displayed below.</small>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <h1> {this.state.submit} </h1>
      
      </form>
    </div>
    );
  }
}

export default App;
