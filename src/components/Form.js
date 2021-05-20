import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry"
  });

  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value
  //   });
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     lastName: event.target.value
  //   });
  // }

function handleChange(event) {
  // name is the KEY in the formData object we're trying to update
  const name = event.target.name;
  const value = event.target.value;

  setFormData({
    ...formData,
    [name]: value
  });
}

  return (
    <form>
      <input type="text" 
        name="firstName"
        onChange={handleChange} 
        value={formData.firstName} />
      <input type="text" 
        name="lastName"
        onChange={handleChange} 
        value={formData.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
