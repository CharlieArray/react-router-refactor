import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import NotesPage from "./NotesPage";
import "./Noteful.css";
import { findNote } from "../helperFunctions";
import StateContext from "../StateContext";

export default class MainMain extends Component {
  render() {

    return (
      <StateContext.Consumer>
        {(state) => {
          return (
            <div className="Main">
              <h2>Main Page</h2>

              
        <Route
            path='/note/:noteId'
            component = {NotesPage}
            // render={ routeProps => {
            //   const { noteId } = routeProps.match.params;
            //   const note = findNote(notes, noteId);
            //   note={note} />;
            // }}
          />

        {/* This gave me most issues state passed in cannot be in { } for map/filter methods  */}
        {state.notes.map((note) => (
          <li key={note.id}>
            <Link to={`/note/${note.id}`}>
              <div className="Note-Divs">
                <h2>{note.name}</h2>
                <h3>Date Modified: {note.modified}</h3>
                <button className="Button">Delete Button</button>
              </div>
            </Link>
          </li>
        ))} 
            </div>
          );
        }}
      </StateContext.Consumer>
    );
  }
}
