import React, { Component } from "react";
import StateContext from "../StateContext";
import "./Noteful.css";
import config from '../config'

export default class NotesMain extends Component {
  static defaultProps ={
    onDeleteNote: () => {},
    match: {
      params: {}
    }
  }

  static contextType = StateContext;


  handleClickDelete = e => {
    e.preventDefault()
    const noteId = this.props.id
    console.log(noteId)

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        this.context.deleteNote(noteId)
        // allow parent to perform extra behaviour
        this.props.onDeleteNote(noteId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleDeleteNote = noteId => {
    this.props.history.push(`/`)
  }

  render() {
    const context = this.context;

    const {noteId} = this.props.match.params.noteId;

    let noteResultName;
    let noteResultDate;

    context.state.notes.filter(function (note) {
      if (note.id === noteId) {
        noteResultName = note.name;
        noteResultDate = note.modified;
      }
    });

    return (
      
      <div className="Main">
        <div onDeleteNote={this.handleDeleteNote} className="Note-Divs">
          <h2>{noteResultName}</h2>
          <h3>Date Modified: {noteResultDate}</h3>
          <button onClick={this.handleClickDelete} className="Button">Delete Button</button>
        </div>
      </div>
    );
  }
}
