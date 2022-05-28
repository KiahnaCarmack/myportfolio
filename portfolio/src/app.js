import Contact from "./components/contact/contact"
import Topbar from "./components/topbar/topbar"
import Portfolio from "./components/portfolio/portfolio"
import Intro from "./components/intro/intro"
import Footer from "./components/footer/footer"
import React from 'react';
import './app.scss';


function App(){
    return(
        <div classname="app">
             <Topbar/>
             <div className="sections">
             <Intro/>
            <Portfolio/>
            <Contact/>
            </div>
            <Footer/>


        </div>
    )
}

export default App;