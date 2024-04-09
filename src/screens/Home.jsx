import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import About from '../components/About'
import Galery from '../components/Galery'
import '../styles/styles.css'
<<<<<<< HEAD
=======

>>>>>>> 1a0bcd6601996058791bb790e780960a984503dd

function Home(){
    return(
        <main>
            <Header />
            <Banner />
            <div className="section" id="sobre">
                <About />
            </div>
            <div className="section" id="galeria">
                <Galery />
            </div>
            <Footer />
        </main>
    )
}

export default Home