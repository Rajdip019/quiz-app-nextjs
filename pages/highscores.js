import React from 'react'
import HighScores from './components/HighScores'
import Document from './document';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const highscores = () => {
    return (
        <div>
        <Document/>
        <Navbar />
        <HighScores />
        <Footer />
        </div>
    )
}

export default highscores
