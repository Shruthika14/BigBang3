import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './admindashboard.css';

const AdminDashboard = () => {
  const [pendingUsers, setPendingUsers] = useState([]);

  const fetchPendingUsers = async () => {
    try {
      const response = await axios.get('/api/User/pending'); // Replace with your API endpoint
      setPendingUsers(response.data);
    } catch (error) {
      console.error('Error fetching pending users:', error);
    }
  };

  const approveAgent = async (userId) => {
    try {
      await axios.post(`/api/User/approve/${userId}`); // Replace with your API endpoint
      fetchPendingUsers();
    } catch (error) {
      console.error('Error approving agent:', error);
    }
  };

  const rejectUser = async (userId) => {
    try {
      await axios.post(`/api/User/reject/${userId}`); // Replace with your API endpoint
      fetchPendingUsers();
    } catch (error) {
      console.error('Error rejecting user:', error);
    }
  };

  useEffect(() => {
    fetchPendingUsers();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <h3>Pending Users</h3>
      <table className="user-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pendingUsers.map((user) => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="approve-btn" onClick={() => approveAgent(user.userId)}>Approve</button>
                <button className="reject-btn" onClick={() => rejectUser(user.userId)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
