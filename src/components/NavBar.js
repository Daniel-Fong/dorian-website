import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    render () {
        return (
            <ul className='nav-ul'>
                <Link to={'/'}>
                <li>Home</li>
                </Link>
                <Link to={'/aboutMe'}>
                <li>About Me</li>
                </Link>
                <Link to={'/portfolio/collections'}>
                <li>Portfolio</li>
                </Link>
                <Link to={'/contact'}>
                <li>Contact</li>
                </Link>
            </ul>
        )
    }
}

export default NavBar;