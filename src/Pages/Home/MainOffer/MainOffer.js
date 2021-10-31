import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MainOffer = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        const url = `https://travnorth.herokuapp.com/places`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    return (
        <div>
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto sm:py-8 lg:py-10 lg:max-w-none">
                        <h2 className="text-2xl font-extrabold text-gray-900">Collections</h2>

                        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                            {user.slice(2, 8).map((callout) => (
                                <div key={callout.name} className="group relative">
                                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                        <img
                                            src={callout.img}
                                            alt={callout.img}
                                            className="w-full h-full object-center object-cover"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-sm text-gray-900">
                                        <Link to={`/preview/${callout._id}`}
                                            className='font-bold'>

                                            <span className="absolute  inset-0" />
                                            {callout.title}
                                        </Link>
                                    </h3>
                                    <p className="text-base inset-0 font-lighter text-gray-500">{(callout.discription).slice(0, 200)}</p>
                                    <br />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainOffer;