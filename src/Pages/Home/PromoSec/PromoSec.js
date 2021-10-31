import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../media/homeIcon2/home1.jpg'
import img2 from '../../media/homeIcon2/home2.jpg'
import img3 from '../../media/homeIcon2/home3.jpg'
import img4 from '../../media/homeIcon2/home4.jpg'
import img5 from '../../media/homeIcon2/home5.jpg'
import img6 from '../../media/homeIcon2/home6.jpg'
import img7 from '../../media/homeIcon2/home7.jpg'
const PromoSec = () => {
    return (
        <div className=' xl:flex-row xl:flex container mx-auto px-4 justify-center items-center'>
            <div>
                <div className="sm:max-w-lg flex-1  flex flex-col mx-auto items-center mt-5 mb-10">
                    <h1 className="text-4xl font font-bold tracking-tight text-gray-800 sm:text-6xl">
                        Plan Your 2021 Cuise <span className='font-extrabold'>SAVE</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                        It's not too early to get your vacation plans in place, and we've got some great offers for 2023 to tempt you. Book by September 1, 2022 and take advantage of our Early Booking Offers.
                    </p>
                    <Link
                        to="/places"
                        className="my-2 inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                    >
                        Find Tours
                    </Link>
                </div>
            </div>
            <div>
                <div className="flex justify-center	 items-center space-x-6 lg:space-x-8  flex-1">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                            <img
                                src={img1}
                                alt=""
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                            <img
                                src={img2} alt=""
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                            <img
                                src={img3} alt=""
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                            <img
                                src={img4} alt=""
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                            <img
                                src={img5} alt=""
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                            <img
                                src={img6} alt=""
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                            <img
                                src={img7} alt=""
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PromoSec;