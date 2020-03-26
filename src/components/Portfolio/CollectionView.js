import React from 'react'
import portfolioContext from './portfolioContext'
import Piece from './Piece'
import NavBar from '../NavBar'

class CollectionView extends React.Component {
    static defaultProps = {
        history: {
            goBack: () => {}
        },
        match: {
            params: {}
        }
    }
    render() {
        return (
            <portfolioContext.Consumer>
                {value => {
                    const collection = value.collections.find(collection => collection.name === this.props.match.params.collectionName);
                    return (
            <div className='collection-view-div'>
                <header>
                    <NavBar />
                </header>
                <section className='collection-sidebar'>
                    <h1 className='collection-h1'>{collection.name}</h1>
                    <p className='collection-description'>{collection.description}</p>
                    <button type='button' className='back-button' onClick={(e) => {
                        e.preventDefault();
                        this.props.history.goBack();
                        }}>Back
                    </button>
                </section>
                <section className='mobile-collection-display'>
                <h1 className='collection-h1'>{collection.name}</h1>
                    <p className='collection-description'>{collection.description}</p>
                    <button type='button' className='back-button' onClick={(e) => {
                        e.preventDefault();
                        this.props.history.goBack();
                        }}>Back
                    </button>
                </section>
                <section className ='collections-pieces-list'>
                <ul className='collections-pieces-ul'>
                    {value.pieces.filter((piece) => piece.collection === collection.name).map((piece) => <Piece value={value} collection={collection} key={piece.name} piece={piece} />)}
                </ul>
                <button type='button' className='back-button mobile-back-button' onClick={(e) => {
                        e.preventDefault();
                        this.props.history.goBack();
                        }}>Back
                </button>
                </section>
            </div>
                )
            }}
            </portfolioContext.Consumer>
            
        )
    }
    }

export default CollectionView;