import React, { Component } from "react";
import "./Noteful.css";
import StateContext from "../StateContext";



export default class NotesSidebar extends Component {
  render() {
    const history = this.props.history;

    function handleBackClick() {
      history.goBack();
      //alternate way is this.props.history.push('/')
      //make sure you take care of "this" since its in a function
    }

    <StateContext.Consumer>
      {(state) => {
        let allFolders = state.folders;

        let fullURL = history.location.pathname;
        let urlID = fullURL.slice(6, 42);
        const notesArray = state.notes;

        let noteIdResult;
        notesArray.filter(function (note) {
          if (note.id === urlID) {
            noteIdResult = note.folderId;
          }
        });

        console.log(noteIdResult)

        let folderNameResults;
        allFolders.filter(function (folder) {
          if (noteIdResult === folder.id) {
            folderNameResults = folder.name;
          }
        });
        console.log(folderNameResults)
      }}
    </StateContext.Consumer>;

    // console.log(folderNameResults)
    // let newVariable = folderNameResults

    //known is notes.id   => match notes.id to store  =>
    //get back folderId of that notes element and return folder.id

    return (
      <>
        <button onClick={handleBackClick}>Go Back</button>

        <h2>Side Bar</h2>

        <div className="Folder-Divs">
          {/* <h3>{newVariable}</h3> */}
        </div>
      </>
    );
  }
}
