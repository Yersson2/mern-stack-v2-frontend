import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
//import { useForm } from "react-hook-form";

const CreateNote = () => {

  const[users, setUsers] = useState([]);
  const[userSelected, setUserSelected] = useState('');

  useEffect( () => {
    (async () => {
      const res = await axios.get('http://localhost:4000/api/users')
      setUsers(res.data.map( user => user.username));
    }) ();
  }, [users]);
  
  const onInputChange = e => {
    setUserSelected(e.target.value);
  }

  return (
    <div className="border grid grid-cols-1">
      <div className="bg-white mx-auto border-2 border-gray-400 shadow rounded w-full md:w-1/2 flex flex-col p-5">
        <h1 className="font-bold text-gray-600">Create a Note</h1>
        <div className="mt-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="users">
            Users
          </label>
          <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2"
          onChange = { onInputChange }
          id="users"
          >
            {
              users.map( user => 
                <option key={ user } value={ user }>
                  { user }
                </option>)
            }
          </select>
        </div>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold placeholder-gray-500" htmlFor="title">
              title
          </label>
          <input className="shadow appearance-none border rounded py-3 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3 w-full mb-2" type="text" id="title" placeholder="Write a title"/>
        </div>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="content">
              content
          </label>
          <textarea className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3 w-full mb-2" name="content" id="content">

          </textarea>
        </div>
        <form >
          <button type="submit" className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded my-3">Save</button>
        </form>
      </div>
    </div>
  );
}
 
export default CreateNote;