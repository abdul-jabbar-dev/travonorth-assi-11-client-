import React from 'react';
import Bannar from './bannar/Bannar';
import MainOffer from './MainOffer/MainOffer';
import PromoSec from './PromoSec/PromoSec';
import Reviews from './Reviews/Reviews';

const Home = () => {

    return (
        <div>
            <PromoSec></PromoSec>
            <MainOffer></MainOffer>
            <Bannar></Bannar>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;