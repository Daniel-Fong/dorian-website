import React from 'react'
import Collection from './Collection'
import portfolioContext from './portfolioContext'
import NavBar from '../NavBar'

class Portfolio extends React.Component {
    state = {
        collections: [
            {   
                name: 'Animals',
                description: 'Over the past few years, while on vacation or over a stormy weekend, I have found myself wanting to capture animals and their unique features. In this collection, you will find a handful of birds (I love drawing their colorful and textured beaks and eyes), and some other favorite animals.',
                image: '../../img/animals/baby-albatross.jpg', 
            },
            {
                name: 'Breadth',
                description: "During my junior year of highschool, I created my first AP Art Portfolio. I choose to explore the faces of age across friends and family members, studying the differences between the skin of a new baby's face, and that of my grandfather. I choose my favorite mediums for this study - pencil and charcoal.",
                image: '../../img/breadth/pears.png', 
            },
            {   
                name: 'Age',
                description: "This collection is a bit of a hodge-podge; works range from quick sketches with crayon, to more in-depth self-portrait studies or long term oil paintings. Throughout my childhood, I would visit my grandmother's etching studio, and do small copper plate etchings (see the Bahamas series from 2008). This medium is particularly exciting, because you cannot erase any strokes you make on the copper film - what's done, is done. Other pieces in this portfolio include oil and chalk pastels, and their interaction with watercolor. I will continue to add to this album as I am inspired to try to mediums, or simply draw something out of the blue!",
                image: '../../img/age/grandad.jpg', 
            },
           
            {   
                name: 'Logos and Graphic Design',
                description: 'Here you will find a few designs I completed for my company, academic group, or organizations I belong to. ',
                image: '../../img/logos-graphic-design/geotech-structural.jpg', 
            },
            {   
                name: 'Street Painting Festival',
                description: 'My twin sister and I signed up for the Marin Street Painting Festival two years in a row, and got to spend an entire Saturday experimenting with chalk pastel on an asphalt canvas. Both challenging and rewarding, this festival created a space for artists to express whatever they wished, surrounding my supportive and eager viewers on a sunny summer day. ',
                image: '../../img/street-painting-festival/nelson-2.jpg', 
            },
            {   
                name: 'Texture',
                description: 'During my second year in AP Art, I choose to produce an oil-specific collection where I would explore nature with a magnifying glass. Most pieces are zoomed in on texture found in nature, as well as the brilliant colors and water reflections you may find.',
                image: '../../img/texture/bark.jpg', 
            },
            {
                name: 'Figure Drawings',
                description: 'As a junior in high school, I enrolled in a figure drawing class in Oakland, California. I may have been the youngest in the class, but so enjoyed the freedom given to each artist as they decided how to capture the model in front of them; take up the whole large sheet of paper? Use big strokes of black and white charcoal? Just pencil? You can choose anything. Little direction is given in these classes, which, to me, makes it that much more exciting. In an effort to incorporate more art into my life recently,I found a figure drawing class in Colorado this past year. Although a late night 3 hour session can be challenging after a full day of work, I walk out with a rediscovered joy and satisfaction. Hopefully I can get myself to this class once a month or so... ',
                image: '../../img/figure-drawings/figure-1.jpg'
            },

        ],
        pieces: [
            {
                name: 'Baby Albatross',
                year: 2017,
                description: "It's a baby albatross.",
                medium: 'Colored Pencil',
                collection: 'Animals',  
                image: '../../img/animals/baby-albatross.jpg'               
            },
            {
                name: 'Albatross',
                year: 2017,
                description: "It's an Albatross.",
                medium: 'Colored Pencil',
                collection: 'Animals',  
                image: '../../img/animals/albatross.jpg'                
            },
            {
                name: 'Nene',
                year: 2017,
                description: "It's a Hawaiian goose.",
                medium: 'Colored Pencil',
                collection: 'Animals', 
                image: '../../img/animals/nene.jpg'                 
            },
            {
                name: 'Rooster',
                year: 2017,
                description: "Loud. Obnoxious. Edible.",
                medium: 'Colored Pencil',
                collection: 'Animals',  
                image: '../../img/animals/rooster.jpg'               
            },
            {
                name: 'Bearded Reedling',
                year: 2017,
                description: "The Little Fat One",
                medium: 'Colored Pencil',
                collection: 'Animals',   
                image: '../../img/animals/bearded-reedling.jpg'               
            },
            {
                name: 'Hummingbird',
                year: 2017,
                description: "It's a hummingbird.",
                medium: 'Colored Pencil',
                collection: 'Animals',
                image: '../../img/animals/hummingbird.jpg'                
            },
            {
                name: 'Cheetah',
                year: 2018,
                description: "It's a cheetah.",
                medium: 'Pencil',
                collection: 'Animals',
                image: '../../img/animals/cheetah.jpg'                
            },
            {
                name: 'Jimi',
                year: 2018,
                description: "It's Jimi.",
                medium: 'Pencil',
                collection: 'Animals',
                image: '../../img/animals/jimi.jpg'                
            },
            {
                name: 'Benny',
                year: 2018,
                description: "It's Benny.",
                medium: 'Pencil',
                collection: 'Animals',
                image: '../../img/animals/benny.jpg'                
            },
            {
                name: 'Baboo',
                year: 2019,
                description: "It's baboo.",
                medium: 'Pencil',
                collection: 'Animals',
                image: '../../img/animals/baboo.jpg'                
            },
            {
                name: 'Baby Penguin',
                year: 2019,
                description: "It's a pengy.",
                medium: 'Pencil',
                collection: 'Animals',
                image: '../../img/animals/baby-penguin.jpg'                
            },
            {
                name: 'Mimi',
                year: 2018,
                description: "It's a Mimi bunny.",
                medium: 'Pencil',
                collection: 'Animals',
                image: '../../img/animals/mimi.jpg'                
            },
            {
                name: 'Christopher',
                year: 2009,
                description: "It's Christopher.",
                medium: 'Graphite',
                collection: 'Age',
                image: '../../img/age/christopher.jpg'                
            },
            {
                name: 'Crying Baby ',
                year: 2009,
                description: "It's Christopher.",
                medium: 'Graphite',
                collection: 'Age',
                image: '../../img/age/crying-baby.jpg'                
            },
            {
                name: 'Scream',
                year: 2009,
                description: "It's Christopher.",
                medium: 'Charcoal',
                collection: 'Age',
                image: '../../img/age/dorian-scream.jpg'                
            },
            {
                name: 'Francesca',
                year: 2009,
                description: "It's Christopher.",
                medium: 'Charcoal',
                collection: 'Age',
                image: '../../img/age/francesca.jpg'                
            },
            {
                name: 'Friends',
                year: 2009,
                description: "It's Christopher.",
                medium: 'Graphite',
                collection: 'Age',
                image: '../../img/age/friends.jpg'                
            },
            {
                name: 'Grandad',
                year: 2009,
                description: "It's Christopher.",
                medium: 'Graphite',
                collection: 'Age',
                image: '../../img/age/grandad.jpg'                
            },
            {
                name: 'Joy',
                year: 2009,
                description: "It's Christopher.",
                medium: 'Graphite',
                collection: 'Age',
                image: '../../img/age/joy.jpg'                
            },
            {
                name: 'Kissy Face',
                year: 2009,
                description: "It's Christopher.",
                medium: 'Colored Pencil',
                collection: 'Age',
                image: '../../img/age/kissy-face.jpg'                
            },
            {
                name: 'MLK',
                year: 2009,
                description: "It's Christopher.",
                medium: 'Graphite',
                collection: 'Age',
                image: '../../img/age/mlk.jpg'                
            },
            {
                name: 'Mom',
                year: 2009,
                description: "It's Christopher.",
                medium: 'Colored Pencil',
                collection: 'Age',
                image: '../../img/age/mom.jpg'                
            },
            {
                name: 'Skater',
                year: 2009,
                description: "It's Christopher.",
                medium: 'Graphite',
                collection: 'Age',
                image: '../../img/age/skater.jpg'                
            },
            {
                name: 'Bahamas',
                year: 2008,
                description: "Breadth images",
                medium: 'Copper Plate Etching',
                collection: 'Breadth',
                image: '../../img/breadth/bahamas.jpg'                
            },
            {
                name: 'Bahamas 1',
                year: 2008,
                description: "Breadth images",
                medium: 'Copper Plate Etching',
                collection: 'Breadth',
                image: '../../img/breadth/bahamas-1.jpg'                
            },
            {
                name: 'Bahamas 2',
                year: 2008,
                description: "Breadth images",
                medium: 'Copper Plate Etching',
                collection: 'Breadth',
                image: '../../img/breadth/bahamas-2.jpg'                
            },
            {
                name: 'Bahamas 3',
                year: 2008,
                description: "Breadth images",
                medium: 'Copper Plate Etching',
                collection: 'Breadth',
                image: '../../img/breadth/bahamas-3.jpg'                
            },
            {
                name: 'Blind Portrait',
                year: 2008,
                description: "Breadth images",
                medium: 'Pen and Water Color',
                collection: 'Breadth',
                image: '../../img/breadth/blind-portrait.jpg'                
            },
            {
                name: 'Dancers',
                year: 2009,
                description: "Breadth images",
                medium: 'Pen, Water Color and Salt',
                collection: 'Breadth',
                image: '../../img/breadth/dancers.jpg'                
            },
            {
                name: 'Favorite Things',
                year: 2009,
                description: "Breadth images",
                medium: 'Pen on Elephant Dung Paper',
                collection: 'Breadth',
                image: '../../img/breadth/favorite-things.jpg'                
            },
            {
                name: 'Florence Cats',
                year: 2019,
                description: "Breadth images",
                medium: 'Pen',
                collection: 'Breadth',
                image: '../../img/breadth/florence-cats.jpg'                
            },
            {
                name: 'Flowers 1',
                year: 2009,
                description: "Breadth images",
                medium: 'Oil Pastel and Water Color',
                collection: 'Breadth',
                image: '../../img/breadth/flowers-1.jpg'                
            },{
                name: 'Flowers 2',
                year: 2009,
                description: "Breadth images",
                medium: 'Water Color',
                collection: 'Breadth',
                image: '../../img/breadth/flowers-2.jpg'                
            },
            {
                name: 'Glass',
                year: 2010,
                description: "Breadth images",
                medium: 'Pencil',
                collection: 'Breadth',
                image: '../../img/breadth/glass.jpg'                
            },
            {
                name: 'Liquid',
                year: 2010,
                description: "Breadth images",
                medium: 'Pencil',
                collection: 'Breadth',
                image: '../../img/breadth/liquid.jpg'                
            },
            {
                name: 'Love',
                year: 2010,
                description: "Breadth images",
                medium: 'Oil Paint on Canvas',
                collection: 'Breadth',
                image: '../../img/breadth/love.jpg'                
            },
            {
                name: 'Paper',
                year: 2010,
                description: "Breadth images",
                medium: 'Chalk Pastel',
                collection: 'Breadth',
                image: '../../img/breadth/paper.jpg'                
            },
            {
                name: 'Pasta',
                year: 2010,
                description: "Breadth images",
                medium: 'Pencil',
                collection: 'Breadth',
                image: '../../img/breadth/pasta.jpg'                
            },
            {
                name: 'Pears',
                year: 2010,
                description: "Breadth images",
                medium: 'Chalk Pastel',
                collection: 'Breadth',
                image: '../../img/breadth/pears.png'                
            },
            {
                name: 'Reflection',
                year: 2010,
                description: "Breadth images",
                medium: 'Pencil',
                collection: 'Breadth',
                image: '../../img/breadth/reflection.jpg'                
            },
            {
                name: 'Rocking Horse',
                year: 2010,
                description: "Breadth images",
                medium: 'Oil Pastel and Water Color',
                collection: 'Breadth',
                image: '../../img/breadth/rocking-horse.jpg'                
            },
            {
                name: 'Self Portrait',
                year: 2010,
                description: "Breadth images",
                medium: 'Graphite and Water Color',
                collection: 'Breadth',
                image: '../../img/breadth/self-portrait.jpg'                
            },
            {
                name: 'Sufers',
                year: 2019,
                description: "Breadth images",
                medium: 'Pen',
                collection: 'Breadth',
                image: '../../img/breadth/sufers.jpg'                
            },
            {
                name: 'Table Still Life',
                year: 2010,
                description: "Breadth images",
                medium: 'Chalk Pastel',
                collection: 'Breadth',
                image: '../../img/breadth/table-still-life.jpg'                
            },
            {
                name: 'Waves',
                year: 2010,
                description: "Breadth images",
                medium: 'Oil Pastel',
                collection: 'Breadth',
                image: '../../img/breadth/waves.jpg'                
            },
            {
                name: 'Company Mural 1',
                year: 2018,
                description: "Logo and Graphic Design",
                medium: 'Pencil-Bluebeam Overlay',
                collection: 'Logos and Graphic Design',
                image: '../../img/logos-graphic-design/mural-1.jpg'                
            },
            {
                name: 'Company Mural 2',
                year: 2018,
                description: "Logo and Graphic Design",
                medium: 'Pencil-Bluebeam Overlay',
                collection: 'Logos and Graphic Design',
                image: '../../img/logos-graphic-design/mural-2.jpg'                
            },
            {
                name: 'Company Mural 3',
                year: 2018,
                description: "Logo and Graphic Design",
                medium: 'Pencil-Bluebeam Overlay',
                collection: 'Logos and Graphic Design',
                image: '../../img/logos-graphic-design/mural-3.jpg'                
            },
            {
                name: 'Company Mural 4',
                year: 2018,
                description: "Logo and Graphic Design",
                medium: 'Pencil-Bluebeam Overlay',
                collection: 'Logos and Graphic Design',
                image: '../../img/logos-graphic-design/mural-4.jpg'                
            },
            {
                name: 'Company Mural 5',
                year: 2018,
                description: "Logo and Graphic Design",
                medium: 'Pencil-Bluebeam Overlay',
                collection: 'Logos and Graphic Design',
                image: '../../img/logos-graphic-design/mural-5.jpg'                
            },
            {
                name: 'Dan and his Penguins',
                year: 2016,
                description: "Logo and Graphic Design",
                medium: 'Pen',
                collection: 'Logos and Graphic Design',
                image: '../../img/logos-graphic-design/dan-penguins.jpg'                
            },
            {
                name: 'Soil-Structure Interaction',
                year: 2012,
                description: "Logo and Graphic Design",
                medium: 'Pencil-Bluebeam Overlay',
                collection: 'Logos and Graphic Design',
                image: '../../img/logos-graphic-design/geotech-structural.jpg'                
            },
            {
                name: 'Nelson Mandela 1',
                year: 2009,
                description: "Street Painting Festival",
                medium: 'Chalk',
                collection: 'Street Painting Festival',
                image: '../../img/street-painting-festival/nelson-1.jpg'                
            },
            {
                name: 'Nelson Mandela 2',
                year: 2009,
                description: "Street Painting Festival",
                medium: 'Chalk',
                collection: 'Street Painting Festival',
                image: '../../img/street-painting-festival/nelson-2.jpg'                
            },
            {
                name: 'Nelson Mandela 3',
                year: 2009,
                description: "Street Painting Festival",
                medium: 'Chalk',
                collection: 'Street Painting Festival',
                image: '../../img/street-painting-festival/nelson-3.jpg'                
            },
            {
                name: 'Sold 1',
                year: 2010,
                description: "Street Painting Festival",
                medium: 'Chalk',
                collection: 'Street Painting Festival',
                image: '../../img/street-painting-festival/sold-1.jpg'                
            },
            {
                name: 'Sold 2',
                year: 2010,
                description: "Street Painting Festival",
                medium: 'Chalk',
                collection: 'Street Painting Festival',
                image: '../../img/street-painting-festival/sold-2.jpg'                
            },
            {
                name: 'Sold 3',
                year: 2010,
                description: "Street Painting Festival",
                medium: 'Chalk',
                collection: 'Street Painting Festival',
                image: '../../img/street-painting-festival/sold-3.jpg'                
            },
            {
                name: 'Tree Bark',
                year: 2010,
                description: "Texture",
                medium: 'Oil Pastel',
                collection: 'Texture',
                image: '../../img/texture/bark.jpg'                
            },
            {
                name: 'Red Berries',
                year: 2010,
                description: "Texture",
                medium: 'Oil Paint on Canvas',
                collection: 'Texture',
                image: '../../img/texture/berries.jpg'                
            },
            {
                name: 'Grass View',
                year: 2010,
                description: "Texture",
                medium: 'Oil Paint on Canvas',
                collection: 'Texture',
                image: '../../img/texture/grass-eyes.jpg'                
            },
            {
                name: 'Autumn',
                year: 2010,
                description: "Texture",
                medium: 'Oil Pastel',
                collection: 'Texture',
                image: '../../img/texture/leaf-color.jpg'                
            },
            {
                name: 'Droplets',
                year: 2010,
                description: "Texture",
                medium: 'Oil Paint on Canvas',
                collection: 'Texture',
                image: '../../img/texture/leaf-droplets.jpg'                
            },
            {
                name: 'Reflection',
                year: 2010,
                description: "Texture",
                medium: 'Oil Paint on Canvas',
                collection: 'Texture',
                image: '../../img/texture/reflection-izzy.jpg'                
            },
            {
                name: 'Flower',
                year: 2010,
                description: "Texture",
                medium: 'Oil Paint on Canvas',
                collection: 'Texture',
                image: '../../img/texture/yellow-flower.jpg'                
            },
            {
                name: 'Figure 1',
                year: 2010,
                description: "adsfaslkfdjasl;fdjl;asj",
                medium: 'Pencil',
                collection: 'Figure Drawings',
                image: '../../img/figure-drawings/figure-1.jpg'                
            },
            {
                name: 'Figure 2',
                year: 2010,
                description: "lsadfkasdfj;klasd",
                medium: 'Pencil',
                collection: 'Figure Drawings',
                image: '../../img/figure-drawings/figure-2.jpg'                
            },
            {
                name: 'Figure 3',
                year: 2010,
                description: "asfdjaklfd;asdjfjl",
                medium: 'Pencil',
                collection: 'Figure Drawings',
                image: '../../img/figure-drawings/figure-3.jpg'                
            },
        ],
    }

    

    handleCollectionClick = (collectionName) => {
        this.setState({
            selectedCollection: {collectionName}
        });
    };

    render () {
        
        const contextValue = {
            collections: this.state.collections,
            pieces: this.state.pieces,
            // handlePieceClick: this.handlePieceClick(),
        }
        console.log(contextValue);
        return (
            <portfolioContext.Provider value={contextValue}>
            <div className='portfolio-div'>
                <header>
                    <NavBar />
                </header>
                <section className='portfolio-sidebar'>
                    <h1 className='portfolio-h1'>Dorian Krausz</h1>
                    <h2 id='portfolio-h2'>Portfolio</h2>
                    <p>As I weave in and out of artistic expression, I’d like to use this website as a source of inspiration, and a home for pieces and collections I have completed in the past. It is also something I can share with friends, family, and colleagues, curious about the creative bursts that this engineer gets every once in a while. </p>
                </section>
                <section className='mobile-portfolio-display'>
                    <h1 className='portfolio-h1'>Dorian Krausz</h1>
                    <h2 id='portfolio-h2'>Portfolio</h2>
                    <p>I feel fat and sassy</p>
                </section>
                <section className ='portfolio-collections-list'>
                <ul className='portfolio-ul'>
                    {this.state.collections.map((collection) => <Collection handleCollectionClick={this.handleCollectionClick} key={collection.name} collection={collection}/>)}
                </ul>
                </section>
            </div>
            </portfolioContext.Provider>
        )
    }
}

export default Portfolio;