import React, { Component } from 'react';
import { GlobalStyle } from './globalStyles';
import Hero from './Hero';
import Products from './Products';
import Feature from './Feature';
import Footer from './Footer';
import { albumData, recommendedArtists } from './Products/data';

class Rashad extends Component {
    render(){
        return(
            <Router>
                <GlobalStyle />
                <Hero />
                <Products heading='Best Works' data={albumData} />
                <Feature />
                <Products heading='Recommended Artists' data={recommendedArtists} />
                <Footer />
            </Router>
        )
    }
}

export default Rashad;