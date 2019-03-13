import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import "./App.css";
import jsonServerProvider from "ra-data-json-server";
import { UsersList } from "./components/users";
import { PostsList } from "./components/posts";
import { PostsCreate } from "./components/posts";
import { PostsEdit } from "./components/posts";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import dashboard from "./components/dashboard";
import authProvider from "./components/authProvider";

class App extends Component {
  state = { dataProvider: null };

  //Gets json data
  async componentWillMount() {
    const dataProvider = jsonServerProvider(
      "http://jsonplaceholder.typicode.com"
    );

    //set the json data in the state
    this.setState({ dataProvider });
  }

  render() {
    const { dataProvider } = this.state;
    return (
      <Admin
        dataProvider={dataProvider}
        dashboard={dashboard}
        authProvider={authProvider}
      >
        <Resource name="users" list={UsersList} icon={UserIcon} />
        <Resource
          name="posts"
          list={PostsList}
          edit={PostsEdit}
          create={PostsCreate}
          icon={PostIcon}
        />
      </Admin>
    );
  }
}

export default App;
