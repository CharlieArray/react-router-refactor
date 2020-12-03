import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Noteful.css";
import StateContext from "../StateContext";

export default class FolderSidebar extends Component {
  render() {

    return (
      <StateContext.Consumer>
        {(state) => {
          return (
            <div className="Sidebar">
              <h2>Side Bar</h2>

              {state.folders.map((folder) => (
                <li key={folder.id}>
                  <Link to={`/folder/`}>
                    <div className="Folder-Divs">
                      <h3>{folder.name}</h3>
                    </div>
                  </Link>
                </li>
              ))}

              <div className="Folder-Divs">
                <h3>Add Folder</h3>
              </div>
            </div>
          );
        }}
      </StateContext.Consumer>
    );
  }
}
