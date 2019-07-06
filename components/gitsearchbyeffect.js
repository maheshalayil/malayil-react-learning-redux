import React, { useState, useEffect } from 'react';
import gitAPI from '../gitApi';

function GitUsersByEffect() {
  const [users, setUsers] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    console.log('effect called');
    const fetchData = async () => {
      const result = await gitAPI.get(`/search/users?q=${term}`);
      setUsers(result.data.items);
      console.log('test');
    }
    fetchData();
  },[term]);

  return (
    <div>
      <input type='text' onChange={(e)=> setTerm(e.target.value)} />
      <ul>
        {users.map(item => (
          <li key={item.login}>
            {item.login}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GitUsersByEffect;