import React from 'react'
import {Link} from 'react-router-dom'

class Collection extends React.Component {
    render() {
        const collectionName = this.props.collection.name;
        return(
            <li className='collection-div'>
                <h2>{this.props.collection.name}</h2>
                <Link to={`/portfolio/collections/${collectionName}`} >
                    <img 
                        className='collection-img' 
                        alt={this.props.collection.name} 
                        src={this.props.collection.image}>
                    </img>
                </Link>
            </li>
        )
    }
}

export default Collection;