import React from 'react';

const portfolioContext = React.createContext ({
    collections: [
        {   
            name: 'Animals',
            description: 'Over the past few years, while on vacation or over a stormy weekend, I have found myself wanting to capture animals and their unique features. In this collection, you will find a handful of birds (I love drawing their colorful and textured beaks and eyes), and some other favorite animals.',
            image: 'https://i.imgur.com/wwqi1I9.jpg', 
        },
        {
            name: 'Breadth',
            description: "During my junior year of highschool, I created my first AP Art Portfolio. I choose to explore the faces of age across friends and family members, studying the differences between the skin of a new baby's face, and that of my grandfather. I choose my favorite mediums for this study - pencil and charcoal.",
            image: 'https://i.imgur.com/TEBuiMq.png', 
        },
        {   
            name: 'Age',
            description: "This collection is a bit of a hodge-podge; works range from quick sketches with crayon, to more in-depth self-portrait studies or long term oil paintings. Throughout my childhood, I would visit my grandmother's etching studio, and do small copper plate etchings (see the Bahamas series from 2008). This medium is particularly exciting, because you cannot erase any strokes you make on the copper film - what's done, is done. Other pieces in this portfolio include oil and chalk pastels, and their interaction with watercolor. I will continue to add to this album as I am inspired to try to mediums, or simply draw something out of the blue!",
            image: 'https://i.imgur.com/kiJR9qm.jpg', 
        },
       
        {   
            name: 'Logos and Graphic Design',
            description: 'Here you will find a few designs I completed for my company, academic group, or organizations I belong to. ',
            image: 'https://i.imgur.com/Zs6PG5H.jpg', 
        },
        {   
            name: 'Street Painting Festival',
            description: 'My twin sister and I signed up for the Marin Street Painting Festival two years in a row, and got to spend an entire Saturday experimenting with chalk pastel on an asphalt canvas. Both challenging and rewarding, this festival created a space for artists to express whatever they wished, surrounding my supportive and eager viewers on a sunny summer day. ',
            image: 'https://i.imgur.com/JUJQOoo.jpg', 
        },
        {   
            name: 'Texture',
            description: 'During my second year in AP Art, I choose to produce an oil-specific collection where I would explore nature with a magnifying glass. Most pieces are zoomed in on texture found in nature, as well as the brilliant colors and water reflections you may find.',
            image: 'https://i.imgur.com/H1pYf5P.jpg', 
        },
        {
            name: 'Figure Drawings',
            description: 'As a junior in high school, I enrolled in a figure drawing class in Oakland, California. I may have been the youngest in the class, but so enjoyed the freedom given to each artist as they decided how to capture the model in front of them; take up the whole large sheet of paper? Use big strokes of black and white charcoal? Just pencil? You can choose anything. Little direction is given in these classes, which, to me, makes it that much more exciting. In an effort to incorporate more art into my life recently,I found a figure drawing class in Colorado this past year. Although a late night 3 hour session can be challenging after a full day of work, I walk out with a rediscovered joy and satisfaction. Hopefully I can get myself to this class once a month or so... ',
            image: 'https://i.imgur.com/LlCe3Bz.jpg'
        },

    ],
    pieces: [
        {
            name: 'Baby Albatross',
            year: 2017,
            description: "It's a baby albatross.",
            medium: 'Colored Pencil',
            collection: 'Animals',  
            image: 'https://i.imgur.com/wwqi1I9.jpg'               
        },
        {
            name: 'Albatross',
            year: 2017,
            description: "It's an Albatross.",
            medium: 'Colored Pencil',
            collection: 'Animals',  
            image: 'https://i.imgur.com/JXQ0UKH.jpg'                
        },
        {
            name: 'Nene',
            year: 2017,
            description: "It's a Hawaiian goose.",
            medium: 'Colored Pencil',
            collection: 'Animals', 
            image: 'https://i.imgur.com/8j1K988.jpg'                 
        },
        {
            name: 'Rooster',
            year: 2017,
            description: "Loud. Obnoxious. Edible.",
            medium: 'Colored Pencil',
            collection: 'Animals',  
            image: 'https://i.imgur.com/3S1AssU.jpg'               
        },
        {
            name: 'Bearded Reedling',
            year: 2017,
            description: "The Little Fat One",
            medium: 'Colored Pencil',
            collection: 'Animals',   
            image: 'https://i.imgur.com/xnOfvOp.jpg'               
        },
        {
            name: 'Hummingbird',
            year: 2017,
            description: "It's a hummingbird.",
            medium: 'Colored Pencil',
            collection: 'Animals',
            image: 'https://i.imgur.com/utXrNvY.jpg'                
        },
        {
            name: 'Cheetah',
            year: 2018,
            description: "It's a cheetah.",
            medium: 'Pencil',
            collection: 'Animals',
            image: 'https://i.imgur.com/rcg02N8.jpg'                
        },
        {
            name: 'Jimi',
            year: 2018,
            description: "It's Jimi.",
            medium: 'Pencil',
            collection: 'Animals',
            image: 'https://i.imgur.com/hdWy8bJ.jpg'                
        },
        {
            name: 'Benny',
            year: 2018,
            description: "It's Benny.",
            medium: 'Pencil',
            collection: 'Animals',
            image: 'https://i.imgur.com/JLZWGgO.jpg'                
        },
        {
            name: 'Baboo',
            year: 2019,
            description: "It's baboo.",
            medium: 'Pencil',
            collection: 'Animals',
            image: 'https://i.imgur.com/xWfuFCJ.jpg'                
        },
        {
            name: 'Baby Penguin',
            year: 2019,
            description: "It's a pengy.",
            medium: 'Pencil',
            collection: 'Animals',
            image: 'https://i.imgur.com/p0LJKC9.jpg'                
        },
        {
            name: 'Mimi',
            year: 2018,
            description: "It's a Mimi bunny.",
            medium: 'Pencil',
            collection: 'Animals',
            image: 'https://i.imgur.com/p9DdVCE.jpg'                
        },
        {
            name: 'Christopher',
            year: 2009,
            description: "It's Christopher.",
            medium: 'Graphite',
            collection: 'Age',
            image: 'https://i.imgur.com/TnHC4nV.jpg'                
        },
        {
            name: 'Crying Baby ',
            year: 2009,
            description: "It's Christopher.",
            medium: 'Graphite',
            collection: 'Age',
            image: 'https://i.imgur.com/vw2xAeq.jpg'                
        },
        {
            name: 'Scream',
            year: 2009,
            description: "It's Christopher.",
            medium: 'Charcoal',
            collection: 'Age',
            image: 'https://i.imgur.com/0nqm60J.jpg'                
        },
        {
            name: 'Francesca',
            year: 2009,
            description: "It's Christopher.",
            medium: 'Charcoal',
            collection: 'Age',
            image: 'https://i.imgur.com/O8QMgio.jpg'                
        },
        {
            name: 'Grandad',
            year: 2009,
            description: "It's Christopher.",
            medium: 'Graphite',
            collection: 'Age',
            image: 'https://i.imgur.com/kiJR9qm.jpg'                
        },
        {
            name: 'Joy',
            year: 2009,
            description: "It's Christopher.",
            medium: 'Graphite',
            collection: 'Age',
            image: 'https://i.imgur.com/hY0uIbI.jpg'                
        },
        {
            name: 'Friends',
            year: 2009,
            description: "It's Christopher.",
            medium: 'Graphite',
            collection: 'Age',
            image: 'https://i.imgur.com/9L53NBr.jpg'                
        },
        {
            name: 'Kissy Face',
            year: 2009,
            description: "It's Christopher.",
            medium: 'Colored Pencil',
            collection: 'Age',
            image: 'https://i.imgur.com/rGC7AFP.jpg'                
        },
        {
            name: 'MLK',
            year: 2009,
            description: "It's Christopher.",
            medium: 'Graphite',
            collection: 'Age',
            image: 'https://i.imgur.com/gUvNuT5.jpg'                
        },
        {
            name: 'Mom',
            year: 2009,
            description: "It's Christopher.",
            medium: 'Colored Pencil',
            collection: 'Age',
            image: 'https://i.imgur.com/JDBu1k1.jpg'                
        },
        {
            name: 'Skater',
            year: 2009,
            description: "It's Christopher.",
            medium: 'Graphite',
            collection: 'Age',
            image: 'https://i.imgur.com/gGMRLwe.jpg'                
        },
        {
            name: 'Bahamas',
            year: 2008,
            description: "Breadth images",
            medium: 'Copper Plate Etching',
            collection: 'Breadth',
            image: 'https://i.imgur.com/G9HCDTA.jpg'                
        },
        {
            name: 'Bahamas 1',
            year: 2008,
            description: "Breadth images",
            medium: 'Copper Plate Etching',
            collection: 'Breadth',
            image: 'https://i.imgur.com/e9E5nx0.jpg'                
        },
        {
            name: 'Bahamas 2',
            year: 2008,
            description: "Breadth images",
            medium: 'Copper Plate Etching',
            collection: 'Breadth',
            image: 'https://i.imgur.com/OMbgVlA.jpg'                
        },
        {
            name: 'Bahamas 3',
            year: 2008,
            description: "Breadth images",
            medium: 'Copper Plate Etching',
            collection: 'Breadth',
            image: 'https://i.imgur.com/xrB60MB.jpg'                
        },
        {
            name: 'Blind Portrait',
            year: 2008,
            description: "Breadth images",
            medium: 'Pen and Water Color',
            collection: 'Breadth',
            image: 'https://i.imgur.com/eT2hTPS.jpg'                
        },
        {
            name: 'Dancers',
            year: 2009,
            description: "Breadth images",
            medium: 'Pen, Water Color and Salt',
            collection: 'Breadth',
            image: 'https://i.imgur.com/J3TBPd7.jpg'                
        },
        {
            name: 'Favorite Things',
            year: 2009,
            description: "Breadth images",
            medium: 'Pen on Elephant Dung Paper',
            collection: 'Breadth',
            image: 'https://i.imgur.com/HwJsLvO.jpg'                
        },
        {
            name: 'Florence Cats',
            year: 2019,
            description: "Breadth images",
            medium: 'Pen',
            collection: 'Breadth',
            image: 'https://i.imgur.com/RHE1pDL.jpg'                
        },
        {
            name: 'Flowers 1',
            year: 2009,
            description: "Breadth images",
            medium: 'Oil Pastel and Water Color',
            collection: 'Breadth',
            image: 'https://i.imgur.com/nBXWlSL.jpg'                
        },{
            name: 'Flowers 2',
            year: 2009,
            description: "Breadth images",
            medium: 'Water Color',
            collection: 'Breadth',
            image: 'https://i.imgur.com/OfUQi0v.jpg'                
        },
        {
            name: 'Glass',
            year: 2010,
            description: "Breadth images",
            medium: 'Pencil',
            collection: 'Breadth',
            image: 'https://i.imgur.com/IqpE9Tc.jpg'                
        },
        {
            name: 'Liquid',
            year: 2010,
            description: "Breadth images",
            medium: 'Pencil',
            collection: 'Breadth',
            image: 'https://i.imgur.com/m4CieAe.jpg'                
        },
        {
            name: 'Paper',
            year: 2010,
            description: "Breadth images",
            medium: 'Chalk Pastel',
            collection: 'Breadth',
            image: 'https://i.imgur.com/LRUSdv9.jpg'                
        },
        {
            name: 'Pasta',
            year: 2010,
            description: "Breadth images",
            medium: 'Pencil',
            collection: 'Breadth',
            image: 'https://i.imgur.com/akNB6J6.jpg'                
        },
        {
            name: 'Pears',
            year: 2010,
            description: "Breadth images",
            medium: 'Chalk Pastel',
            collection: 'Breadth',
            image: 'https://i.imgur.com/TEBuiMq.png'                
        },
        {
            name: 'Reflection',
            year: 2010,
            description: "Breadth images",
            medium: 'Pencil',
            collection: 'Breadth',
            image: 'https://i.imgur.com/OQTSZ0q.jpg'                
        },
        {
            name: 'Love',
            year: 2010,
            description: "Breadth images",
            medium: 'Oil Paint on Canvas',
            collection: 'Breadth',
            image: 'https://i.imgur.com/HYcOWS3.jpg'                
        },
        {
            name: 'Rocking Horse',
            year: 2010,
            description: "Breadth images",
            medium: 'Oil Pastel and Water Color',
            collection: 'Breadth',
            image: 'https://i.imgur.com/DLF2jCF.jpg'                
        },
        {
            name: 'Self Portrait',
            year: 2010,
            description: "Breadth images",
            medium: 'Graphite and Water Color',
            collection: 'Breadth',
            image: 'https://i.imgur.com/oCuA1LA.jpg'                
        },
        {
            name: 'Table Still Life',
            year: 2010,
            description: "Breadth images",
            medium: 'Chalk Pastel',
            collection: 'Breadth',
            image: 'https://i.imgur.com/RaTfMC6.jpg'                
        },
        {
            name: 'Sufers',
            year: 2019,
            description: "Breadth images",
            medium: 'Pen',
            collection: 'Breadth',
            image: 'https://i.imgur.com/N1ImIWy.jpg'                
        },
        {
            name: 'Waves',
            year: 2010,
            description: "Breadth images",
            medium: 'Oil Pastel',
            collection: 'Breadth',
            image: 'https://i.imgur.com/97EpPIT.jpg'                
        },
        {
            name: 'Company Mural 1',
            year: 2018,
            description: "Logo and Graphic Design",
            medium: 'Pencil-Bluebeam Overlay',
            collection: 'Logos and Graphic Design',
            image: 'https://i.imgur.com/in8gRB8.jpg'                
        },
        {
            name: 'Company Mural 2',
            year: 2018,
            description: "Logo and Graphic Design",
            medium: 'Pencil-Bluebeam Overlay',
            collection: 'Logos and Graphic Design',
            image: 'https://i.imgur.com/Zdp6V0p.jpg'                
        },
        {
            name: 'Company Mural 3',
            year: 2018,
            description: "Logo and Graphic Design",
            medium: 'Pencil-Bluebeam Overlay',
            collection: 'Logos and Graphic Design',
            image: 'https://i.imgur.com/MA4xpxt.jpg'                
        },
        {
            name: 'Company Mural 4',
            year: 2018,
            description: "Logo and Graphic Design",
            medium: 'Pencil-Bluebeam Overlay',
            collection: 'Logos and Graphic Design',
            image: 'https://i.imgur.com/SNdA83D.jpg'                
        },
        {
            name: 'Company Mural 5',
            year: 2018,
            description: "Logo and Graphic Design",
            medium: 'Pencil-Bluebeam Overlay',
            collection: 'Logos and Graphic Design',
            image: 'https://i.imgur.com/XqCHDTZ.jpg'                
        },
        {
            name: 'Dan and his Penguins',
            year: 2016,
            description: "Logo and Graphic Design",
            medium: 'Pen',
            collection: 'Logos and Graphic Design',
            image: 'https://i.imgur.com/mHavxcA.jpg'                
        },
        {
            name: 'Soil-Structure Interaction',
            year: 2012,
            description: "Logo and Graphic Design",
            medium: 'Pencil-Bluebeam Overlay',
            collection: 'Logos and Graphic Design',
            image: 'https://i.imgur.com/Zs6PG5H.jpg'                
        },
        {
            name: 'Nelson Mandela 1',
            year: 2009,
            description: "Street Painting Festival",
            medium: 'Chalk',
            collection: 'Street Painting Festival',
            image: 'https://i.imgur.com/wleDS7u.jpg'                
        },
        {
            name: 'Nelson Mandela 2',
            year: 2009,
            description: "Street Painting Festival",
            medium: 'Chalk',
            collection: 'Street Painting Festival',
            image: 'https://i.imgur.com/JUJQOoo.jpg'                
        },
        {
            name: 'Nelson Mandela 3',
            year: 2009,
            description: "Street Painting Festival",
            medium: 'Chalk',
            collection: 'Street Painting Festival',
            image: 'https://i.imgur.com/BjcSj3g.jpg'                
        },
        {
            name: 'Sold 1',
            year: 2010,
            description: "Street Painting Festival",
            medium: 'Chalk',
            collection: 'Street Painting Festival',
            image: 'https://i.imgur.com/odV0vrL.jpg'                
        },
        {
            name: 'Sold 2',
            year: 2010,
            description: "Street Painting Festival",
            medium: 'Chalk',
            collection: 'Street Painting Festival',
            image: 'https://i.imgur.com/EO2Ssg1.jpg'                
        },
        {
            name: 'Sold 3',
            year: 2010,
            description: "Street Painting Festival",
            medium: 'Chalk',
            collection: 'Street Painting Festival',
            image: 'https://i.imgur.com/U6Cv7zs.jpg'                
        },
        {
            name: 'Tree Bark',
            year: 2010,
            description: "Texture",
            medium: 'Oil Pastel',
            collection: 'Texture',
            image: 'https://i.imgur.com/H1pYf5P.jpg'                
        },
        {
            name: 'Autumn',
            year: 2010,
            description: "Texture",
            medium: 'Oil Pastel',
            collection: 'Texture',
            image: 'https://i.imgur.com/pWa0ZiR.jpg'                
        },
        {
            name: 'Red Berries',
            year: 2010,
            description: "Texture",
            medium: 'Oil Paint on Canvas',
            collection: 'Texture',
            image: 'https://i.imgur.com/aTmlxhl.jpg'                
        },
        {
            name: 'Grass View',
            year: 2010,
            description: "Texture",
            medium: 'Oil Paint on Canvas',
            collection: 'Texture',
            image: 'https://i.imgur.com/vBK1tdk.jpg'                
        },
        {
            name: 'Droplets',
            year: 2010,
            description: "Texture",
            medium: 'Oil Paint on Canvas',
            collection: 'Texture',
            image: 'https://i.imgur.com/U2WfX1Y.jpg'                
        },
        {
            name: 'Flower',
            year: 2010,
            description: "Texture",
            medium: 'Oil Paint on Canvas',
            collection: 'Texture',
            image: 'https://i.imgur.com/dtEhLv9.jpg'                
        },
        {
            name: 'Reflection',
            year: 2010,
            description: "Texture",
            medium: 'Oil Paint on Canvas',
            collection: 'Texture',
            image: 'https://i.imgur.com/tKKZBCr.jpg'                
        },
        {
            name: 'Figure 1',
            year: 2010,
            description: "adsfaslkfdjasl;fdjl;asj",
            medium: 'Pencil',
            collection: 'Figure Drawings',
            image: 'https://i.imgur.com/LlCe3Bz.jpg'                
        },
        {
            name: 'Figure 2',
            year: 2010,
            description: "lsadfkasdfj;klasd",
            medium: 'Pencil',
            collection: 'Figure Drawings',
            image: 'https://i.imgur.com/ZkD7dKS.jpg'                
        },
        {
            name: 'Figure 3',
            year: 2010,
            description: "asfdjaklfd;asdjfjl",
            medium: 'Pencil',
            collection: 'Figure Drawings',
            image: 'https://i.imgur.com/M0a38So.jpg'                
        },
    ],
})

export default portfolioContext;