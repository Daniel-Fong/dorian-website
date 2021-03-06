import React from 'react'
import NavBar from './NavBar'

class AboutMe extends React.Component {
    render () {
        return (
            <div className='aboutMe'>
                <header>
                    <NavBar />
                </header>
                <h1 className='dorian-h1'>Dorian Krausz</h1>
                <p>Artist and Engineer</p>
                <div className='about-me-inline-container'>
                <img className='aboutMe-img' src='https://i.imgur.com/YxTlHwf.jpg' title='Dorian in a Yellow Hat' alt='Dorian in a Yellow Hat'></img>
                <p className='image-p'>
                    My <strong>mother</strong> wove <strong>art</strong> into my life before I was potty trained.
                </p>
                </div>
                <p className='body-p right'>
                    There are pictures of me and my twin sister splayed out on the kitchen floor in our diapers, brushing <strong> strokes of color</strong> across sheets of construction paper...or standing in front of plastic easels set up in our backyard, playing with acrylic paints. Although the latter may have resulted in two naked 4 year-olds covered in a brown mixture of primary colors, my mother saw art as a beautiful tool for <strong>self expression</strong> and insisted on sharing this sentiment with her daughters as soon as she could. 
                </p>
                <p className='body-p left'>
                    I was <strong>born</strong> and raised in <strong>Northern California</strong>, spoiled by San Francisco's sourdough and city skyline. Between 2010 and 2014, Westwood, Los Angeles was my second home as I completed my <strong>bachelors at UCLA</strong>. I kept one foot in the arts when I could (tap dancing classes, figure drawing), but found myself chasing a more <strong>technically focused degree in Structural Engineering</strong>, where I satisfied my love of numbers and solving problems. More importantly, during this time,
                </p>
                <div className='about-me-inline-container'>
                <p className='image-p'>
                    I also found <strong>rock climbing</strong>
                </p>
                <img className='aboutMe-img' src='https://i.imgur.com/thHfOiI.jpg' title='Dorian and Daniel in the Buttermilks' alt='Dorian and Daniel in the Buttermilks'></img>
                </div>
                <p className='body-p right'>
                (and my love of Korean BBQ). I took a deeper dive into Structural Engineering during my <strong>Masters</strong> program at <strong>UC Berkeley</strong>, where I completed a thesis on how to isolate a building from the ground motions created by a large earthquake (something called "Base Isolation"!). After graduating in 2017, my boyfriend and I took off for the mountains and <strong>settled</strong> in <strong>Denver, Colorado</strong>, where I began a position at a <strong>structural engineering consulting</strong> company. Now that a few years have passed, my heart harbors a long-distance love of Northern California's wine country, all the while
                </p>
                <div className='about-me-inline-container'>
                <img className='aboutMe-img' src='https://i.imgur.com/9ZvkFT9.jpg' title='Dorian at the Maroon Bells' alt='Dorian at the Maroon Bells'></img>
                <p className='image-p'>
                     entranced by Colorado's wildflowers and vibrant fall colors. 
                </p>
                </div>
                <p className='body-p left'>
                    The label of <strong>"artist"</strong> is interesting. <strong>Am I an artist?</strong> By trade, no. I spend most of my days with a calculator and stack of building codes, analyzing the dynamic behavior of buildings under wind and seismic loads. Outside of the office
                </p>
                <div className='about-me-inline-container'>
                <p className='image-p'>
                     you may find me rock climbing, 
                </p>
                <img className='aboutMe-img' title='Telluride Via Ferrata' src='https://i.imgur.com/iw1zdRm.jpg' alt='Telluride Via Ferrata'></img>
                </div>
                <p className='body-p left'>
                tap dancing, snowboarding, baking, or yes...<strong>drawing or painting</strong>. I have <strong>bursts</strong> of <strong>artistic expression</strong> throughout the year, oftentimes concentrated around holidays or weeks off from work. I have been <strong>craving</strong> a larger slice of <strong>art in my life</strong>, and hope to make that a reality in years to come. Whether these abstract plans come to fruition remains to be seen, but I am certain <strong>a part of me will always be an artist.</strong>
                </p>
                <img className='aboutMe-img' src='https://i.imgur.com/n5r3X28.jpg' title='Sourdough Bread' alt='Sourdough Bread'></img>
            </div>
        )
    }
}

export default AboutMe;