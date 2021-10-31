import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import editIcon from '../media/icon/cogwheels.png'
const ManageAPackege = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})

console.log(id)

    useEffect(() => {
        fetch(`https://travnorth.herokuapp.com/places/${id}`)
            .then(res => res.json())
            .then((data) => {
                setUser(data)
            })
    }, [])
    const chngData = e => {
        const updatedValue = e.target.value;
        const updatedName = e.target.name;
        const cUser = { ...user };
        cUser[updatedName] = updatedValue
        setUser(cUser)
        console.log(e)
    }
    const onSubmit = () => {
console.log(user)
        fetch(`https://travnorth.herokuapp.com/places/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => console.log(data))

    };
    return (
        <div>

            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <img style={{ minWidth: '5%', margin: '0 auto' }} src={editIcon} alt="" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Modify your Package</h2>

                    <form onSubmit={onSubmit} className="mt-8 space-y-6" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="title" className="sr-only">
                                    Title
                                </label>
                                <input
                                    name="title"
                                    value={user.title || ''}
                                    type={'text'}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Package Title"
                                    id="title"
                                    onChange={chngData}
                                />
                            </div>
                            <div>
                                <label htmlFor="img" className="sr-only">
                                    Image URL
                                </label>
                                <input
                                    name="img"
                                    value={user.img || ''}
                                    type={'text'}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Image URL"
                                    id="img"
                                    onChange={chngData}
                                />
                            </div>
                            <div>
                                <label htmlFor="hotelP" className="sr-only">
                                    Hotel Price
                                </label>
                                <input
                                    name="hotelP"
                                    type={'number'}
                                    value={user.hotelP || ''}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Hotel Price"
                                    id="hotelP"
                                    onChange={chngData}
                                />
                            </div>
                            <div>
                                <label htmlFor="ticket" className="sr-only">
                                    Ticket Price
                                </label>
                                <input
                                    name="ticket"
                                    value={user.ticket || ''}
                                    type={'number'}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Ticket Price"
                                    id="ticket"
                                    onChange={chngData}
                                />
                            </div>
                            <div>
                                <label htmlFor="discription" className="sr-only">
                                    Package Discription
                                </label>
                                <input
                                    name="discription"
                                    type={'text'}
                                    value={user.discription || ''}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Package discription"
                                    id="discription"
                                    onChange={chngData}
                                />
                            </div>
                            <div>
                                <label htmlFor="date" className="sr-only">
                                    Participant Date
                                </label>
                                <input
                                    name="date"
                                    type={'date'}
                                    value={user.date || ''}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Participant Date"
                                    id="date"
                                    onChange={chngData}

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

export default ManageAPackege;