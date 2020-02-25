import React from 'react'
import portfolioContext from './portfolioContext'

class PieceView extends React.Component {
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
                    const piece = value.pieces.find(piece => piece.name === this.props.match.params.pieceName)
                    console.log(piece.image);
                    return (
            <div className='piece-view-div'>
                <section className='pieceView-sidebar'>
                <h1>{piece.name}</h1>
                <p>Collection: {piece.collection}</p>
                <p>Year: {piece.year}</p>
                <p>Medium: {piece.medium}</p>
                <button type='button' className='back-button' onClick={(e) => {
                    e.preventDefault();
                    this.props.history.goBack();
                }}>Back</button>
                </section>
                <section className='mobile-piece-view-display'>
                    <h1>{piece.name}</h1>
                    <p>Collection: {piece.collection}</p>
                    <p>Year: {piece.year}</p>
                    <p>Medium: {piece.medium}</p>
                </section>
                <img className='pieceview-img' src={`../${piece.image}`} alt={piece.name}></img>
                <button type='button' className='back-button mobile-back-button' onClick={(e) => {
                    e.preventDefault();
                    this.props.history.goBack();
                }}>Back</button>
            </div>
                )}
            }
            </portfolioContext.Consumer>
          
        )
    }
    }

export default PieceView;