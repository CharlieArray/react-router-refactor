import React, { Component } from "react";
import StateContext from "../StateContext";
import "./Noteful.css";

//only return notes from highlighted folder
export default class FolderMain extends Component {
    static contextType = StateContext;

  render() {
    const context = this.context;
    const folders= context.state.folders
    const notes = context.state.notes

    let noteResultName;
    let noteResultDate;

    // console.log(notes); //good
    // console.log(folders); //good

      notes.filter(function (note) {
      if (note.folderId === folders.id) {
        return context.folders.id;
      }
    });


    return (
      <div className="Main">
          
            <h2>Folder Page</h2>
          
        <div className="Note-Divs">
          <h2>{noteResultName}</h2>
          <h3>Date Modified: {noteResultDate}</h3>
          <button className="Button">Delete Button</button>
        </div>
      </div>
    );
  }
}
