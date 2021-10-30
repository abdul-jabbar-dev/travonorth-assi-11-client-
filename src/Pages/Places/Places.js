import React, { useEffect, useState } from 'react';
import Package from './Package/Package';

const Places = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        const url = `https://travnorth.herokuapp.com/place`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return (
        
        <div>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <div 
                    className=
                    "grid  grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
                        {
                            user.map(tour => <Package tour={tour}></Package>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Places;