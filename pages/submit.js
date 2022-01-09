import React from 'react'
import Document from './document'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AllDone from './components/AllDone'

const submit = () => {
    return (
        <div>
        <Document />
        <Navbar />
        <AllDone />
        <Footer />
        </div>
    )
}

export default submit
