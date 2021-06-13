import React, { useState } from "react";
import Card from "../../UI/Card/Card";

import classes from "./UsersList.module.css";

const UsersList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={`${user.name}${user.age}`}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
