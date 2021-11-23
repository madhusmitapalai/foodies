import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Explore from './components/Explore';
import ExploreFoods from './components/ExploreFoods';
import Review from './components/Review';
import Quetions from './components/Quetions';
import Passion from './components/Passion';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
const App = () => {
    return (
        <div>
        <Header/>
        <About/>
        <Explore/>
        <ExploreFoods/>
         <Quetions/>
         <Passion/>
         <Subscribe/>
         <Footer/>
        </div>
    )
}

export default App
