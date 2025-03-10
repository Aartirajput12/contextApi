import React, { lazy, useEffect, useState } from "react";
import { useUserContext } from "./UserContext";

const User = () => {
  const { addUser, updateUser, editingUser } = useUserContext();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    city: "",
    state: "",
    registration: "",
  });

  useEffect(() => {
    if(editingUser) {
      setFormData(editingUser);
    }
  },[editingUser]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    // addUser(formData);
    if(formData.id) {
      updateUser(formData)
    }
    else{
      addUser(formData);
    }

    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone_no: "",
      city: "",
      state: "",
    });
    
  };


  return (
    <div className="p-5">
      {/* <h1 className="font-bold text-2xl mb-4">Add New User</h1> */}
      <h1 className="font-bold text-2xl mb-4">{formData.id ? "Edit User" : "Add New User"}</h1>

      <input name="first_name" onChange={handleChange} value={formData.first_name} className="border mt-3" type="text" placeholder="Enter first name" />
      <br />
      <input name="last_name" onChange={handleChange} value={formData.last_name} className="border mt-3" type="text" placeholder="Enter last name" />
      <br />
      <input name="email" onChange={handleChange} value={formData.email} className="border mt-3" type="text" placeholder="Enter email" />
      <br />
      <input name="phone_no" onChange={handleChange} value={formData.phone_no} className="border mt-3" type="text" placeholder="Enter phone no" />
      <br />
      <input name="city" onChange={handleChange} value={formData.city} className="border mt-3" type="text" placeholder="Enter city" />
      <br />
      <input name="state" onChange={handleChange} value={formData.state} className="border mt-3" type="text" placeholder="Enter state" />
      <br />
      {/* <input name="registration" onChange={handleChange} className="border mt-3" type="text" placeholder="Enter registration" />
      <br /> */}

      <button onClick={handleSubmit} className="mt-3 bg-gray-300 py-2 px-5 cursor-pointer">
        {formData.id ? "Update User" : "Add User"}
      </button>
    </div>
  );
};

export default User;
