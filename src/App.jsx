import React from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Shortcontent from './Shortcontent/Shortcontent.jsx';
import Products from './Products/Products.jsx';
import Services from './Services/Services.jsx';
import Footer from './Footer/Footer.jsx';
import './index.css'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Shortcontent/>
            <Products/>
            <Services/>
            <Footer/>
        </div>
    );
}

export default App;
