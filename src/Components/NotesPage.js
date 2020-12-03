import React from "react";
import { Route, Link} from "react-router-dom";
import "./Noteful.css";
import NotesMain from "./NotesMain";
import NotesSidebar from "./NotesSidebar";
import StateContext from "../StateContext";
// import {withRouter} from 'react-router'

//sidebar show what folder current note is in
//add a back button

export default class NotesPage extends React.Component {
  render() {
    // const noteId = routeProps.match.params
    // const note = findNote(notes, noteId)

    return (
      // <StateContext.Consumer>
      //   {(state) => {
          // return (
            <div>
              <header className="App-header">
                <Link to="/">
                  <h1>Noteful</h1>
                </Link>
              </header>

              <div className="Group">
                <div className="Sidebar">
                  <Route
                    path="/note/:noteId"
                    component = {NotesSidebar} 
                  />
                </div>

                <div className="Main">
                  <h2>Notes Page</h2>
                  <Route
                    path="/note/:noteId"
                    component = {NotesMain}
                      />
                </div>
              </div>
            </div>
          );
      //   }}
      // </StateContext.Consumer>
    // );
  }
}
