import React, { Fragment, useState } from 'react'
import { data } from '../../fakeData'
import './style.css';

export default function Fruits() {
    const [fruits, setFruits] = useState(data)
    //  ASCENDING 
    const sortAscending = (attr) => setFruits([...data].sort((a, b) =>
        attr == 'byName' ? a.name > b.name ? 1 : -1 : attr == 'byDesc' ? a.description > b.description ? 1 : -1 : attr == 'byPrice' && a.price > b.price ? 1 : -1 
    ))

    // DESCENDING
    const sortDescending = (attr) => setFruits([...data].sort((a, b) =>
        attr == 'byName' ? a.name > b.name ? -1 : 1 : attr == 'byDesc' ? a.description > b.description ? -1 : 1 : attr == 'byPrice' &&a.price > b.price ? -1 : 1 
    ))
    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>
                            <div className='row'>
                                <h4>Name</h4>
                                <div className='column' style={{ display: 'flex', justifyContent: "flex-end" }}>
                                    <button onClick={() => sortAscending('byName')}><div style={{ color: "#fff" }}>˄</div></button>
                                    <button onClick={() => sortDescending('byName')} > <div style={{ color: "#fff" }}>˅</div></button>
                                </div>
                            </div>
                        </th>
                        <th><div className='row'>
                            <h4>Description</h4>
                            <div className='column' style={{ display: 'flex', justifyContent: "flex-end" }}>
                                <button onClick={() => sortAscending('byDesc')} > <div style={{ color: "#fff" }}>˄</div></button>
                                <button onClick={() => sortDescending('byDesc')} > <div style={{ color: "#fff" }}>˅</div></button>
                            </div>
                        </div></th>
                        <th><div className='row'>
                            <h4>price</h4>
                            <div className='column' style={{ display: 'flex', justifyContent: "flex-end" }}>
                                <button onClick={() => sortAscending('byPrice')}><div style={{ color: "#fff" }}>˄</div></button>
                                <button onClick={() => sortDescending('byPrice')} > <div style={{ color: "#fff" }}>˅</div></button>
                            </div>
                        </div></th>
                    </tr>
                </thead>
                <tbody>
                    {fruits.map((el, index) => {
                        return (
                            <tr key={index}>
                                <th>{el.id}</th>
                                <th>
                                    {el.name}
                                </th>
                                <th>{el.description}</th>
                                <th>{el.price}</th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Fragment>)
}