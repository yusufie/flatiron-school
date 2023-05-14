import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
  });

  function handleChange(event) {
    // name is the KEY in of the formData object we're trying to update
    // const name = event.target.name;
    // const value = event.target.value;
    const {name, value} = event.target;

    // use `checked` property of checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
  
    setFormData({
      ...formData, // otherwise you'd lose the data of the lastName or lastName one is updated
      [name]: value,
    });
  } 

  

  return (
    <form>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
    </form>
  );
} 

export default Form;