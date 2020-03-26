import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div className='homePage'>
                <h1>Dorian Krausz</h1>
                <p>Artist and Engineer</p>
                <ul>
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
            </div>
        )
    }
}

export default Home;