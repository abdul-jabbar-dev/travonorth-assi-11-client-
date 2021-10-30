import React from 'react';

const Package = ({ tour }) => {
    return (
        <div>
            <div  key={tour.id} className="p-3 group bg-blue-200">
                <div className="w-full  aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                        src={tour.imageSrc}
                        alt=''
                        className="  w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{tour.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{tour.username}</p>

                <button
                    className=" mx-auto block rounded-md py-3 text-white font-semibold px-6 bg-blue-400 hover:bg-blue-600 active:bg-blue-800 ">
                    See Details
                </button>
            </div>
        </div>
    );
};

export default Package;