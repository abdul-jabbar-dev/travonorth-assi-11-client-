import React from 'react';

const Reviews = () => {
    return (
        <div>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Top Reviews for Travnorth</h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className="group relative">
                            <div className="mx-auto h-40 w-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden lg:h-12/3 lg:aspect-none">
                                <img src="https://i.ibb.co/41MgcHn/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.png" alt="Front of men&#039;s Basic Tee in black." className=" cursor-default w-full h-full object-center rounded-full   object-cover lg:w-full lg:h-full"></img>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div className="mt-4 mx-auto text-center ">
                                    <h3 className="text center text-lg font-black my-1 text-gray-700">
                                        sripoli
                                    </h3>
                                    <p className="my1-1 text-sm text-gray-500">
                                        Nico took me around Sibiu and the mountains showing a complete understanding of not only the beautiful history of Romania and moreover Transilvania.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="mx-auto h-40 w-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden lg:h-12/3 lg:aspect-none">
                                <img src="https://i.ibb.co/RpwzG95/portrait-smiling-young-man-eyewear.png" alt="Front of men&#039;s Basic Tee in black." className=" cursor-default w-full h-full object-center rounded-full   object-cover lg:w-full lg:h-full"></img>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div className="mt-4 mx-auto text-center ">
                                    <h3 className="text center text-lg font-black my-1 text-gray-700">
                                        Ada Roy
                                    </h3>
                                    <p className="my1-1 text-sm text-gray-500">
                                        She treats her guests Fairly, friendly,and perfectly. She is keen to make the tour is organized. She is organized, and very punctual.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="mx-auto h-40 w-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden lg:h-12/3 lg:aspect-none">
                                <img src="https://i.ibb.co/nLLBfrv/handsome-young-african-american-with-khaki-tshirt.png" alt="Front of men&#039;s Basic Tee in black." className=" cursor-default w-full h-full object-center rounded-full   object-cover lg:w-full lg:h-full"></img>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div className="mt-4 mx-auto text-center ">
                                    <h3 className="text center text-lg font-black my-1 text-gray-700">
                                        Roy Jhone
                                    </h3>
                                    <p className="my1-1 text-sm text-gray-500">
                                        Best guide ever! I had an amazing days in Sibiu and that couldnt ve been possible with Nico, thank you for your time and that great experience
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="mx-auto h-40 w-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden lg:h-12/3 lg:aspect-none">
                                <img src="https://i.ibb.co/pQcfYP6/close-up-portrait-professional-successful-young-african-american-man-red-hoodie-cross-arms-chest.png" alt="Front of men&#039;s Basic Tee in black." className=" cursor-default w-full h-full object-center rounded-full   object-cover lg:w-full lg:h-full"></img>
                            </div>
                            <div className="mt-4 mx-auto text-center ">
                                <h3 className="text center text-lg font-black my-1 text-gray-700">
                                    Jhone smith
                                </h3>
                                <p className="my1-1 text-sm text-gray-500">
                                    Last fall we enjoyed our trip in Romania, the country of rich history and beautiful scenery. The high point of our trip was the time with our guide
                                </p>
                            </div>
                        </div>

                        {/* <!-- More products... --> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;