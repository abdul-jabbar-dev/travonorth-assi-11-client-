import React, { useState } from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FaOpencart } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import headerIcon from '../media/icon/maps.png'
import Auth from '../Auth/Firebase/Auth';
import Cart from '../Cart/Cart';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Header = () => {
    const { signout, user } = Auth()

    return (
        <Disclosure as="nav" className="bg-blue-600">

            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-blue-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link to={'/'}>
                                        <img
                                            className="block lg:hidden h-8 w-auto"
                                            src={headerIcon}
                                            alt="Workflow"
                                        /></Link>
                                    <Link to={'/'}>
                                        <img
                                            className="hidden lg:block h-8 w-auto"
                                            src={headerIcon}
                                            alt="Workflow"
                                        /></Link>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">

                                        <NavLink exact to={'/home', '/'} activeClassName='bg-blue-800 text-white' className='text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                            Home
                                        </NavLink>
                                        <NavLink to={'/places'} activeClassName='bg-blue-800 text-white' className=' text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                            Places
                                        </NavLink>
                                        <NavLink to={'/about'} activeClassName='bg-blue-800 text-white' className='text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                            About
                                        </NavLink>

                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* Profile dropdown */}
                                {
                                    user.displayName ?
                                        <Link to={`/cart`} className="bg-blue-800 p-1 rounded-full text-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
                                            p
                                        </Link> : null
                                }
                                {
                                    user.displayName ? <Menu as="div" className="ml-3  relative">
                                        <div>
                                            <Menu.Button className="bg-blue-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
                                                <span className="sr-only">Open user menu</span>
                                                <div className='flex items-center'>
                                                    <div className="h-8 w-8 rounded-full overflow-hidden" >
                                                        {
                                                            user.photoURL ? <img src={user.photoURL} alt={user.displayName} /> : <img src={'https://i.ibb.co/34SnYf8/no-photo.png'} alt={user.displayName} a />
                                                        }
                                                    </div>
                                                    <div className=" text-white rounded-full overflow-hidden" >
                                                        {
                                                            user.displayName
                                                        }
                                                    </div>
                                                </div>
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/addplace"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Add Tourest service
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/manageallpackege"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Manage All Packege
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={signout}
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Sign out
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu> : <NavLink
                                        to={'/login'}
                                        activeClassName='bg-blue-800 text-white' className='text-blue-300
                                             hover:bg-blue-700 
                                             hover:text-white
                                             px-3 py-2
                                             rounded-md
                                             text-sm
                                             font-medium'
                                    >
                                        Login
                                    </NavLink>
                                }
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2  space-y-1">
                            <Link to={'/home'} >
                                <Disclosure.Button
                                    className={classNames(
                                        ' text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                    )}>
                                    Home
                                </Disclosure.Button>
                            </Link>
                        </div>
                        <div className="px-2  space-y-1">
                            <Link to={'/places'} >
                                <Disclosure.Button
                                    className={classNames(
                                        ' text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                    )}>
                                    Places
                                </Disclosure.Button>
                            </Link>
                        </div>
                        <div className="px-2  pb-3 space-y-1">
                            <Link to={'/about'} >
                                <Disclosure.Button
                                    className={classNames(
                                        ' text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                    )}>
                                    About
                                </Disclosure.Button>
                            </Link>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Header;