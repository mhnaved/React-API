import React, { useState } from 'react'
import { useEffect } from 'react';
import UserData from './UserData';

const API = "https://jsonplaceholder.typicode.com/users/"

function Reactapi() {

  const [users, setUsers] = useState( []);

  const fetchUser = async (url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if(data.length > 0){
        setUsers(data);
      }

    }catch(e){
      console.error(e)
    }
  }

  useEffect(() => {
fetchUser(API);
  }, [])

  return (
    <>
      <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Adress</th>
          </tr>
        </thead>
        <tbody>
          <UserData users = {users}/>
        </tbody>
      </table>
    </>
  )
}

export default Reactapi