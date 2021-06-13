import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

import classes from "./AddUser.module.css";

const AddUser = () => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    )
      return;

    if (+enteredUserAge < 1) return;

    console.log(enteredUserName, enteredUserAge);
    setEnteredUserName("");
    setEnteredUserAge("");
  };
  const usernameChangedHandler = (e) => {
    setEnteredUserName(e.target.value);
  };
  const userAgeChangedHandler = (e) => {
    setEnteredUserAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangedHandler}
          value={enteredUserName}
        />{" "}
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={userAgeChangedHandler}
          value={enteredUserAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
