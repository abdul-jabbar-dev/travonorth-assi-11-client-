import React from 'react';
import { Link } from 'react-router-dom';

const Package = ({ tour }) => {
    const loding = <div class="flex justify-center items-center">
        <div
            class="
      animate-spin
      rounded-full
      h-32
      w-32
      border-t-2 border-b-2 border-purple-500
    "
        ></div>
    </div>
    return (
        <div>
            {
                !tour ? loding : <div key={tour.id} className="p-3 group">
                    <div className="w-full  aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                        <img
                            src={tour.img}
                            alt={tour.img}
                            className="w-full h-full object-center object-cover group-hover:opacity-75"
                        />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold  text-gray-900">{tour.title}</h3>
                    <p className="mt-1 text-sm font-medium mb-1 text-gray-600">{tour.discription}</p>

                    <Link
                        to={`/preview/${tour._id}`}
                        className=" mx-auto block rounded-sm py-3 text-white px-6 bg-blue-400 hover:bg-blue-600 active:bg-blue-800 ">
                        See Details
                    </Link>
                </div>
            }
        </div>
    );
};

export default Package;