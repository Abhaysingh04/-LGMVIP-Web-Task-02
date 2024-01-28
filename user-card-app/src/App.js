import React, { useState } from 'react';
import axios from 'axios';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';
import Navbar from './Navbar';
import UserCard from './UserCard';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Navbar getUsers={getUsers} />
      <div className="user-card-grid">
        {loading ? (
          <div className="loader">
            <RingLoader color="#36D7B7" loading={loading} css={override} size={150} />
          </div>
        ) : (
          users.map(user => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
}

const override = css`
  display: block;
  margin: 0 auto;
`;

export default App;
