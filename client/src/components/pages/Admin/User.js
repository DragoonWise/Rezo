import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Users from '../../../models/Users';
const User = props => {
let { id } = useParams();
const [userdata, setData] = useState([]);
const [updatedAtFormated,setDate] = useState('');
useEffect(() => {
  (async () => {
    let data = await Users.getUser(id)
      setData(data);
      let dateupdate = data.updatedAt;
      dateupdate = new Date(dateupdate);
      dateupdate = dateupdate.toLocaleString();
      setDate(dateupdate);
  })();
}, [id])

return (
    <div className='form-container'>
      <h1>
        <b>{userdata.Login}</b>
      </h1>
<div>Dernière mise à jour : {updatedAtFormated}</div>
     Dernière connection : TBD<br/>
     DashBoardUser : TBD
     <img src='/images/DashboardCall.jpg' alt='Dashboard' />
    </div>
  );
};

export default User;