import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Sidenavbar from '../Components/Sidenavbar';


function Account() {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    getUsers();
  };
  return (
    <div>
          <Navbar />
    <div className='flex'>
    <Sidenavbar  />
    <div>
        <div className="w-screen flex flex-col gap-y-4 items-center">
      <h1 className="title font-bold text-2xl">Users</h1>
      <h2 className="subtitle text-xl font-semibold">List of Users</h2>
      <Link to="/users/add" className="button is-primary mb-2 bg-orange-400 px-2 rounded-2xl font-semibold hover:bg-black hover:text-white duration-500">
        Add New
      </Link>
      </div>
      <div>
      <table class="table-auto is-striped is-fullwidth">
        <thead>
          <tr className="">
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.uuid}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link
                  to={`/users/edit/${user.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(user.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Account