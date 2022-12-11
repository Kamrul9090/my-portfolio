import React from 'react';
import Contact from '../Contact/Contact';
import Banner from './Banner';
import Header from './Header';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;