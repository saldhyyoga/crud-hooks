import React, { useState } from "react";

const AddUserForm = props => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const submitForm = event => {
    event.preventDefault();
    if (!user.username || !user.name) return;

    props.addUser(user);
    setUser(initialFormState);
  };

  return (
    <form onSubmit={submitForm}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Add new User</button>
    </form>
  );
};

export default AddUserForm;
