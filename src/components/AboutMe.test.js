import React from 'react'
import ReactDOM from 'react-dom'
import AboutMe from './Portfolio/Portfolio'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AboutMe />, div);
});