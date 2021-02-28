import React, { useEffect, useState } from 'react';
import UserList from './UserList'

export default function Admin(props) {

    const [manufactureList, setManufactureList] = useState([]);

    useEffect(() => {
        fetch(`https://localhost:3000/api/manufctures`, { withCredentials: true, credentials: 'include' })
          .then(response => response.json())
          .then(result =>  {
              console.log(result)
            setManufactureList(result)
          })    
      },[manufactureList])

      return (
          <div className={"manufactureList"}>
              <UserList manufactureList= {manufactureList} />
          </div>
      )






}