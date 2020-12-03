import React, { Component } from "react";
import StateContext from "../StateContext";
import "./Noteful.css";

export default class NotesMain extends Component {
 

  render() {
    <StateContext.Consumer>
      {(state) => {
        
        const noteId = this.props.value.match.params.noteId;
        console.log(noteId)
     
        let noteNameString;

        state.notes.filter(function (note) {
          if (note.id === noteId) {
            noteNameString = note.name;
          }
        });
      }}
    </StateContext.Consumer>;

    return (
      <div className="Main">
        <div className="Note-Divs">
          {/* <h2>{noteNameString}</h2>
          <h3>Date Modified: {state.notes.modified}</h3> */}
          <button className="Button">Delete Button</button>
        </div>
      </div>
    );
  }
}
