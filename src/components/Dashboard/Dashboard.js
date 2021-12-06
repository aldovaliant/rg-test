import React from 'react'
import { useTable } from 'react-table'

function Dashboard() {
    const data = React.useMemo(
        () => [
            {
                userid: 'anugrahaman71',
                subs: 'English Academy',
                tag: 'englishacademy',
                prize: 'Shoes',
                status: 'created'
            },
            {
                userid: 'rahelpratama413',
                subs: 'Paket Belajar SD 1 Tahun',
                tag: 'ruangguru',
                prize: 'Pencils',
                status: 'created'
            },
            {
                userid: 'aisyahrodiah354',
                subs: 'Membuat dan Menjual Masker Kain Melawan Virus Corona',
                tag: 'skillacademy',
                prize: 'Bag',
                status: 'created'
            }
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'User ID',
                accessor: 'userid', // accessor is the "key" in the data
            },
            {
                Header: 'Subscription',
                accessor: 'subs',
            },
            {
                Header: 'Product Tag',
                accessor: 'tag',
            },
            {
                Header: 'Prize',
                accessor: 'prize',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <table {...getTableProps()} style={{ border: 'solid 1px blue',marginLeft:'20vw' }}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    style={{
                                        borderBottom: 'solid 3px red',
                                        background: 'aliceblue',
                                        color: 'black',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                padding: '10px',
                                                border: 'solid 1px gray',
                                                background: 'papayawhip',
                                            }}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard;
