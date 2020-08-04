import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";

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

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async ( _ , e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/api/users', {
      username: userName
    })
    e.target.reset();
  };

 
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 mt-6">
      <div className="border">
        <div className="border">
          <h3>Create New User</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1">
              <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={ onChangeUsername } ref={register({ required: true })} name="name"/>
              {errors.name && <span className="text-red-400">This field is required</span>}
            </div>
            <button type="submit" className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">Send</button>
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