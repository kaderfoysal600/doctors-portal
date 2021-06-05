import React from 'react';
import Header from './Header/Header';
import HeaderMain from './HeaderMain/HeaderMain';
import 'bootstrap/dist/css/bootstrap.css';
import Services from './Services/Services';
import FeaturedService from './FeaturedService/FeaturedService';
import MakeAppoinment from './MakeAppoinment/MakeAppoinment';
import Testimonials from './Testimonials/Testimonials';
import Blogs from './Blogs/Blogs';
import AllDoctor from './AllDoctor/AllDoctor';
import Contact from './Contact/Contact';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <AllDoctor></AllDoctor>
            <Contact></Contact>
            
           
        </div>
    );
};

export default Home;