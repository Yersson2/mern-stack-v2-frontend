import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const CreateUser = () => {

  const[users, setUsers] = useState([]);
  const[userName, setUsername] = useState('');
  
  useEffect( () => {
    (async () => {
      const res = await axios.get('http://localhost:4000/api/users')
      setUsers(res.data);
    }) ();
  }, [users]);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }
 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <div>
          <h3>Create New User</h3>
          <form action="">
            <div>
              <input type="text" onChange={ onChangeUsername}/>
            </div>
          </form>
        </div>
      </div>
      <ul className="border-collapse border-2 border-gray-500">
        {users.map(user =>
          <li className="border border-gray-400 px-4 py-2 text-gray-800" key={user._id}>
            {user.username}
          </li>
        )}
      </ul>
    </div>
  );
}
 
export default CreateUser;