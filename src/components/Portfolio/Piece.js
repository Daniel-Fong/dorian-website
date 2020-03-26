import React from 'react'
import {Link} from 'react-router-dom'

class Piece extends React.Component {
    render () {
        return (
            <li className='piece-li'>
                <h2>{this.props.piece.name}</h2>
                <Link to={`/portfolio/collections/${this.props.collection.name}/${this.props.piece.name}`} >
                <img className='piece-img' alt={this.props.piece.name} src={this.props.piece.image}></img>
                </Link>
            </li>
        )
    }
}

export default Piece;