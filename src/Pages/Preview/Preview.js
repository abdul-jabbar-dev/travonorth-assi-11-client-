import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoBed } from 'react-icons/io5/';
import { RiPlaneLine } from 'react-icons/ri';

const Preview = () => {
    const { id } = useParams()
    const [place, setPlace] = useState({})
    useEffect(() => {
        fetch(`https://travnorth.herokuapp.com/places/${id}`)
            .then(res => res.json())
            .then(data => setPlace(data))
    }, [id])
    return (

        <div style={{ width: "65%", margin: '5% auto' }} className=" grid grid-cols-1 gap-y-8 gap-x-6 items-start md:grid-cols-12 sm:grid-rows-8 lg:gap-x-8">
            <div className="aspect-w-2 aspect-h-full  rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5 w-full h-full">
                <img style={{ height: 'inherit', width: 'inherit' }} src={place.img} alt={place.img} className=" object-center object-cover" />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
                <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
                    {place.title}
                </h2>

                <section aria-labelledby="information-heading" className="mt-2">
                    <h3 id="information-heading" className="sr-only">Product information</h3>

                    <p className="text-2xl  text-gray-900">
                        <p className='inline text-gray-700 text-xl'>  <RiPlaneLine className='inline' /> BDT</p> {place.ticket}
                    </p>
                    <p className="text-2xl  text-gray-900">
                        <p className='inline text-gray-700 text-xl'>  <IoBed className='inline' /> BDT</p> {place.hotelP}
                    </p>


                    <div className="mt-6">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                            <div className="flex items-center">

                                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>


                                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>

                                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>


                                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>


                                <svg className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <p className="sr-only">3.9 out of 5 stars</p>
                            <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="options-heading" className="mt-10">

                    <h3 id="options-heading" className="sr-only">Product options</h3>

                    <form>

                        <div>
                            <h4 className="text-md text-center text-gray-900 font-medium">
                                Tourist Attractions in {
                                place.title
                            }</h4>

                            <fieldset className="mt-4">
                                <legend className="sr-only">
                                    about{
                                        place.title
                                    }
                                </legend>
                                <div className="flex text-gray-600  items-center space-x-3">
                                    <p>
                                        {place.discription}
                                    </p>
                                </div>
                            </fieldset>
                        </div>


                        <div className="mt-10">
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm text-gray-400 font-medium">Review comming soon</h4>
                                <Link to={'/places'} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">See more places</Link>
                            </div>

                            
                        </div>

                        <button type="submit" className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to bag</button>
                    </form>
                </section>
          
            </div >
        </div >


    );
};

export default Preview;