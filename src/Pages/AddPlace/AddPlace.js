import React from 'react';
import tourestImg from '../media/icon/easter-island.png'
import { useForm } from '../../../node_modules/react-hook-form/dist/index.cjs';


const AddPlace = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const doc = {
            title: data.title,
            img: data.img,
            discription: data.discription,
            hotelP: data.hotelP,
            ticket: data.ticket,
            date: data.date
        }
        console.log(data.img)
        fetch('https://travnorth.herokuapp.com/places', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(doc)
            })
                .then(res => res.json())
                .then(data => alert('congres for added user'))
        
    };
    return (
        <div>
    
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <img style={{ minWidth: '5%', margin: '0 auto' }} src={tourestImg} alt="" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add your tourest Package</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="title" className="sr-only">
                                    Title
                                </label>
                                <input
                                    name="title"
                                    type={'text'}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Package Title"
                                    id="title" {...register('title')}
                                />
                            </div>
                            <div>
                                <label htmlFor="img" className="sr-only">
                                    Image URL
                                </label>
                                <input
                                    name="tmg"
                                    type={'text'}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Image URL"
                                    id="tmg" {...register('img')}
                                />
                            </div>
                            <div>
                                <label htmlFor="hotelP" className="sr-only">
                                    Hotel Price
                                </label>
                                <input
                                    name="hotelP"
                                    type={'number'}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Hotel Price"
                                    id="hotelP" {...register('hotelP')}
                                />
                            </div>
                            <div>
                                <label htmlFor="ticket" className="sr-only">
                                    Ticket Price
                                </label>
                                <input
                                    name="ticket"
                                    type={'number'}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Ticket Price"
                                    id="ticket" {...register('ticket')}
                                />
                            </div>
                            <div>
                                <label htmlFor="discription" className="sr-only">
                                    Package Discription
                                </label>
                                <input
                                    name="discription"
                                    type={'text'}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Package discription"
                                    id="discription" {...register('discription')}
                                />
                            </div>
                            <div>
                                <label htmlFor="date" className="sr-only">
                                    Participant Date
                                </label>

                                <input
                                    name="date"
                                    type={'date'}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Participant Date"
                                    id="date" {...register('date')}
                                />
                            </div>
                        </div>

                        <div>
                            <input type="submit"
                                className="mt-1 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPlace;