import React from "react";
import { useUserContext } from "./UserContext";

const List = () => {
  const { users, loading, deleteUser, editUser} = useUserContext();

  return (
    <div className="p-5 w-7xl">
      <h1 className="font-bold text-2xl mb-4">User List</h1>
      <ul className="justify-around list-none border font-bold p-2.5 grid grid-cols-8 bg-gray-200 text-center border-b border-gray-400">
        <li>Name</li>
        <li>Lname</li>
        <li>Email</li>
        <li>Phone</li>
        <li>City</li>
        <li>State</li>
        <li>Registration</li>
        <li>Action</li>
      </ul>

      {!loading ? (
        users.map((user) => (
          <ul key={user.id} className="border grid grid-cols-8 text-center p-3 border-b border-gray-300">
            <li>{user.first_name}</li>
            <li>{user.last_name}</li>
            <li>{user.email}</li>
            <li>{user.phone_no}</li>
            <li>{user.city}</li>
            <li>{user.state}</li>
            <li>{user.registration}</li>
            <li>
              <button onClick={() => deleteUser(user.id)} className="bg-gray-300 py-2 px-4 cursor-pointer">
                Delete
              </button>

              <button onClick={() => editUser(user)} className="bg-gray-300 ml-3 py-2 px-4 cursor-pointer">
                Edit
              </button>
            </li>
          </ul>
        ))
      ) : (
        <h1>Data Loading...</h1>
      )}
    </div>
  );
};

export default List;