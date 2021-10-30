import React from 'react';
import image1 from '../../media/homeImages/place-1.jpg'
import image2 from '../../media/homeImages/place-2.jpg'
import image3 from '../../media/homeImages/place-3.jpg'
import image4 from '../../media/homeImages/place-4.jpg'

const Bannar = () => {
    return (
        <div>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Get New Experience and Greatest Adventure</h2>
                        <p className="mt-4 text-gray-500">The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.</p>

                        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">World Best Travel Agency Company Since 2008.</dt>
                                <dd className="mt-2 text-sm text-gray-500">The World Travel & Tourism Council (WTTC) represents the Travel & Tourism sector globally.</dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Family Adventure Vacations</dt>
                                <dd className="mt-2 text-sm text-gray-500">Solid walnut base with rare earth magnets and powder coated steel card cover</dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Explore Top Adventures</dt>
                                <dd className="mt-2 text-sm text-gray-500">Travel is the movement of people between distant geographical locations.</dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Explore New Place and Have Fun</dt>
                                <dd className="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Best travel guides</dt>
                                <dd className="mt-2 text-sm text-gray-500">The Best Travel Guides (Online and Books) · FIND RICK STEVES GUIDE BOOKS ON AMAZON ·</dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Offer and discount </dt>
                                <dd className="mt-2 text-sm text-gray-500">Made from natural materials. Grain and color vary with each item.</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                        <img src={image1} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="bg-gray-100 rounded-lg"></img>
                        <img src={image2} alt="Top down view of walnut card tray with embedded magnets and card groove." className="bg-gray-100 rounded-lg"></img>
                        <img src={image3} alt='' className="bg-gray-100 rounded-lg"></img>
                        <img src={image4} alt='' className="bg-gray-100 rounded-lg"></img>
                                    </div>
                                </div>
                            </div>
                    </div>
                    );
};

                    export default Bannar;