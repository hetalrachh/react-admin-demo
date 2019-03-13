import React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";
import MyUrlField from "./myurl";

// Display list of users
export const UsersList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
