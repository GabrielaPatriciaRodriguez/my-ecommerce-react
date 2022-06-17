import { style } from '@mui/system';
import React, { useState, useEffect} from 'react';
import "./ItemList.css"

// import { Productos } from '../Data';

import Item from '../Item/Item';


function ItemList() {
const [users, setUsers] = useState([]);

useEffect(() => {
    //Llamada a la api
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(json => setUsers(json))
}, []);

  return (
    <>
    <h1>Github Users</h1>
    <div className='style'>
        {users.map((user) => <Item key={user.id} data={user} />)}

        
        {/* <div key={idx}>  
        {Productos.map( (producto, idx) => <Item data={producto} /> )}
        </div> */}
    </div>
    </>
  )
}

export default ItemList;