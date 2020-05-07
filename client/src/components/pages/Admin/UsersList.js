import React, { useEffect, useState, useContext } from 'react';
import MenuAdmin from '../../layout/Admin/MenuAdmin';
import Users from '../../../models/Users';
import { useTable, useFilters } from 'react-table'
import AuthContext from '../../../context/auth/authContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const UsersList = () => {
    const [usersdata, setData] = useState([]);
    const authContext = useContext(AuthContext);
    const { user } = authContext;
    useEffect(() => {
        (async () => {
            let users = await Users.getUsers();
            let data = users.map(
                (val) => {
                    return { 'id': val.id, 'Login': val.Login, 'IsAdmin': val.IsAdmin, 'IsDeleted': val.deletedAt != null }
                })
            setData(data);
        })();
    }, [])

    function ColumnFilter({
        column: { filterValue, preFilteredRows, setFilter },
    }) {
        const count = preFilteredRows.length

        return (
            <input
                value={filterValue || ''}
                onChange={e => {
                    setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
                }}
                placeholder={`Search ${count} records...`}
            />
        )
    }
    function Table({ columns, data }) {
        const defaultColumn = React.useMemo(
            () => ({
                // Let's set up our default Filter UI
                Filter: () => { return (<></>) },
            }),
            []
        )
        // Use the state and functions returned from useTable to build your UI
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
        } = useTable({
            columns,
            data,
            defaultColumn,
        },
            useFilters
        )
        // Define a default UI for filtering
        // Render the UI for your table
        return (
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}
                                    {column.canFilter ? column.render('Filter') : null}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    const columns = React.useMemo(
        () => [
            {
                Header: 'Admin',
                accessor: 'IsAdmin',
                Cell: ({ cell: { value } }) => {
                    return (
                        <>
                            {value ? <FontAwesomeIcon icon={faCheck} /> : ''}

                        </>
                    );
                }
            },
            {
                Header: 'Login ',
                accessor: 'Login',
                Filter: ColumnFilter,
            },
            {
                Header: 'Actions',
                accessor: 'id',
                Cell: ({ cell: { value } }) => {
                    const suppr = (user && user.id !== value)
                    console.log(usersdata.find((e)=>{return e.id == value}))
                    const isSuppr = (user && usersdata.find((e)=>{return e && e.id === value}).IsDeleted)
                    return (
                        <>
                            <Link to={"/Admin/User/" + value} className='btn btn-outline-primary'>Visualiser</Link>  {suppr
                                ?
                                <> / {isSuppr ?
                                    // <Link to={'/Admin/User/Reactivate/' + value} >Réactiver</Link>
                                    <button onClick={async (e) => {
                                        await Users.reactivate(value);
                                    }} className='btn btn-outline-primary'>Réactiver</button>
                                    :
                                    // <Link to={'/Admin/User/Delete/' + value} >Supprimer</Link>
                                    <button onClick={async (e) => {
                                        await Users.delete(value);
                                    }} className='btn btn-outline-primary'>Supprimer</button>
                                }
                                </>
                                :
                                ''}
                        </>
                    )
                }
            }
        ],
        [user,usersdata]
    )


    return (
        <div className='row'>
            <MenuAdmin />
            <div className='col-12 col-md-9 bg-light'>
                <h1>Liste d'Utilisateurs</h1>

                <Table columns={columns} data={usersdata} />
            </div>
        </div>
    );
};

export default UsersList;