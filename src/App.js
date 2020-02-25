import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio/Portfolio'
import {Route} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom' 
// import Collection from './components/Portfolio/Collection'
import CollectionView from './components/Portfolio/CollectionView'
import Contact from './components/Contact'
import Home from './components/Home'
import PieceView from './components/Portfolio/PieceView'

class App extends React.Component {

  renderPortfolioRoutes = () => {
    return (
        <>
        <Route exact path='/portfolio/collections' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/aboutMe' component={AboutMe} />
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio/collections/:collectionName/:pieceName' component={PieceView} />
        <Route exact path='/portfolio/collections/:collectionName' component={CollectionView} />
        </>
    )
}

  render() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <header>
        <NavBar />
      </header> */}
      <main>
      {this.renderPortfolioRoutes()}
      </main>
    </div>
    </BrowserRouter>
  );
}}

export default App;
