import React from 'react';
import RainbowText from '../HOC/Rainbows'

const About = () => {
    return (
        <div className="container">
            <h3 className="center">About</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus adipisci ab nihil doloribus consectetur! Qui consequatur, maiores eveniet itaque cum voluptatum placeat sed! Dolorum alias porro soluta? Distinctio, provident quidem?</p>
        </div>
    )
}

export default RainbowText(About)