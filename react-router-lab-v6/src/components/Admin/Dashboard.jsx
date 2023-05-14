import React from "react";
import Posts from "./Posts";
import Users from "./Users";
import { Link, Routes, Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="posts">Posts</Link>
        </li>
        <li>
          <Link to="users">Users</Link>
        </li>
      </ul>
      <Routes>
        <Route path="users" element={<Users />} />
        <Route path="posts" element={<Posts />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
