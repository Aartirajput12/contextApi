import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingUser, setEditingUser] = useState(null);


  const API_URL = "https://crud-django-c7ri.onrender.com/api/user/";

  // Get api
  const getUsers = async () => {
    setLoading(true);
    try {
      let response = await fetch(API_URL);
      response = await response.json();
      setUsers(response.data || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  };

  // post api
  const addUser = async (userData) => {
    try {
      let response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      response = await response.json();
      if (response) {
        alert("New user added");
        setUsers([...users, response.data]); 
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const editUser = (user) => {
    setEditingUser(user);
  }

  // update api
  const updateUser = async (updatedUser) => {
    try {
      let response = await fetch(`${API_URL}${updatedUser.id}/`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });

      response = await response.json();
      if (response) {
        alert("User updated");
        setUsers(users.map((user) => (user.id === updatedUser.id ? response.data : user)));
        setEditingUser(null);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  //  Delete api
  const deleteUser = async (id) => {
    try {
      let response = await fetch(`${API_URL}${id}/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        alert("User deleted");
        setUsers(users.filter((user) => user.id !== id));
      } else {
        alert("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{users, loading, addUser, editUser, updateUser, deleteUser, editingUser  }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUserContext = () => useContext(UserContext);
