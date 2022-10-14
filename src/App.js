import { Component } from 'react';
import './App.css';
import Students from './Components/Students'
import Welcome from './Components/Welcome';
import students from './student-data'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.state =({
      students:students,
      isClicked:false
      
    });
  }
  handleClick() {
    this.setState({isClicked:!this.state.isClicked});
  }
  render(){
    return (
      <>
        <Welcome />
        <h2 style={{textAlign:'center',margin:'0 auto'}}><button onClick={this.handleClick}>Click Me to Show Student Details!!</button></h2>
        {this.state.isClicked ? <Students students={this.state.students} /> : <p style={{color: 'black',textAlign:'center',margin:'0 auto'}}>Click on button</p>}
      </>
    );
  }
}
  
