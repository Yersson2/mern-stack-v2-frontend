import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const CreateUser = () => {

  const[users, setUsers] = useState([]);

  useEffect( () => {
    (async () => {
      const res = await axios.get('http://localhost:4000/api/users')
      setUsers(res.data);
      console.log(users);
    }) ();
  }, [users]);
  
 

  return (
    <div>
      create user
    </div>
  );
}
 
export default CreateUser;