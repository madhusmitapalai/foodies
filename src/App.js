import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Explore from './components/Explore';
import ExploreFoods from './components/ExploreFoods';
import Quetions from './components/Quetions';
import Passion from './components/Passion';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
const App = () => {
    return (
        <React.Fragment>
        <Header/>
        <About/>
        <Explore/>
        <ExploreFoods/>
         <Quetions/>
         <Passion/>
         <Subscribe/>
         <Footer/>
        </React.Fragment>
    )
}

export default App
