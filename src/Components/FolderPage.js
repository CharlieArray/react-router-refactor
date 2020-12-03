import React from "react";
import {Route, Link} from 'react-router-dom'
import FolderMain from './FolderMain'
import FolderSidebar from "./FolderSidebar";
import "./Noteful.css";

//should render specific notes if store.notes.id === store.folders.id
  //tasks: is state passed/props passed down? yes yes

export default class FolderPage extends React.Component {

  render() {

    return (
      <div>
         <header className="App-header">
          <Link to ='/'>
            <h1>Noteful</h1>
          </Link>
        </header>

        <div className="Group">

            <Route 
            path="/folder"
            component = {FolderSidebar}
            />

            <Route
            path="/folder"
            component= {FolderMain}
          />


            <div className="Main">
            <h2>Folder Page</h2>
            </div>
        </div>
      </div>
    );
  }
}
