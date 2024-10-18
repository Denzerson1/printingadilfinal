import React from 'react';
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';
import Richtext from '../components/Richtext';
import Showcase from '../components/Showcase';
import Advantages from '../components/Advantages';
import YourProject from '../components/YourProject';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Partners from '../components/Partners';

function App() {
    return (
        <div className="App">
            <ScrollToTop>
                <Header />
                <Slideshow />
                <Richtext />
                <Showcase />
                <Partners />
                
                <YourProject />
                <Advantages />
                <Footer />
            </ScrollToTop>
        </div>
    );
}

export default App;
