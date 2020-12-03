import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import FolderPage from "./Components/FolderPage";
import MainPage from "./Components/MainPage";
import NotesPage from "./Components/NotesPage";
import dummyStore from "./dummyStore";
import StateContext from "./StateContext";

class App extends React.Component {
  state = {
    notes: [],
    folders: [],
  };

  componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(dummyStore), 100);
  }

  render() {
  
    return (
      //passed in context must be value = {whatever context}
      <StateContext.Provider value={this.state}>
        <div className="App">
          <Route
            exact
            path="/"
            component={MainPage}
            //get rid of render and just have component = {componentname}
          />

          <Route
            path="/note"
            component={NotesPage}
            //get rid of render and just have component = {componentname}
          />

          <Route
            path="/folder"
            component={FolderPage}
            //get rid of render and just have component = {componentname}
          />
        </div>
      </StateContext.Provider>
    );
  }
}

export default App;
