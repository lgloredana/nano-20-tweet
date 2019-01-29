import React  from 'react'
import {NavLink} from "react-router-dom";

export default function Menu() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to='/new' activeClassName='active'>
                        New Tweet
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

