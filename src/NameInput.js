import React, { useState } from "react";

const NameInput = ({ handleSubmit, handleShuffle, err }) => {
  const [newName, setNewName] = useState("");
  const [error, setError] = useState(err);

  const onSubmit = (e) => {
    e.preventDefault();
    if (newName.length > 0) {
      handleSubmit(newName);
      setNewName("");
    }
  };

  let styles = {
    formStyle: {
      textAlign: "center",
      marginTop: "2em",
      // background: "rgb(0,143,16)",
      color: "black",
      padding: "25px",
    },
    label: {
      fontSize: "2.2em",
    },
  };

  return (
    <form className={err && "animate__animated animate__shakeX"} style={styles.formStyle}>
      <label style={styles.label}>
        Enter Name:
        <input
          style={{ marginLeft: "10px" }}
          value={newName}
          placeholder="Name"
          onChange={(e) => {
            if (newName.length < 21) setNewName(e.target.value);
          }}
        />
      </label>
      <button onClick={onSubmit}>Enter</button>
      <button onClick={handleShuffle}>shuffle</button>
    </form>
  );
};

export default NameInput;
