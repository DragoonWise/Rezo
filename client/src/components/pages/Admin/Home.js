import React from 'react';
import MenuAdmin from '../../layout/Admin/MenuAdmin';
import DashBoardAdmin from '../../layout/Admin/DashBoardAdmin';


const AdminHome = () => {
    return (
        <div className='row'>
            <MenuAdmin />
                <DashBoardAdmin />
        </div>
    );
};

export default AdminHome;