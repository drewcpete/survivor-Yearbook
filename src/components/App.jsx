import React from "react";
import StudentList from "./StudentList";
import { Switch, Route } from "react-router-dom";
import ClassList from "./ClassList";
import Home from "./Home";
import NavBar from "./NavBar";
import Error404 from "./Error404";
import NewStudentForm from "./NewStudentForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterStudentList: []
    };
    this.handleAddingNewStudentToList = this.handleAddingNewStudentToList.bind(this);
  }

  handleAddingNewStudentToList(newStudent){
    var newMasterStudentList = this.state.masterStudentList.slice();
    newMasterStudentList.push(newStudent);
    this.setState({masterStudentList: newMasterStudentList});
  }
  render(){
    return (
      <div  className="container">
  
  
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Student" render={()=><StudentList studentList={this.state.masterStudentList} />} />
          <Route path = '/newstudent' render={()=><NewStudentForm onNewStudentCreation={this.handleAddingNewStudentToList}/>}/>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;