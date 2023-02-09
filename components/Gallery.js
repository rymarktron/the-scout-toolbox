import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3BottomLeftIcon,
  CogIcon,
  HeartIcon,
  HomeIcon,
  PhotoIcon,
  PlusIcon as PlusIconOutline,
  RectangleStackIcon,
  Squares2X2Icon as Squares2X2IconOutline,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import {
  Bars4Icon,
  MagnifyingGlassIcon,
  PencilIcon,
  PlusIcon as PlusIconMini,
  Squares2X2Icon as Squares2X2IconMini,
} from '@heroicons/react/20/solid'
import Image from 'next/image'

const tabs = [
  { name: 'Recently Viewed', href: '#', current: true },
  { name: 'Recently Added', href: '#', current: false },
  { name: 'Favorited', href: '#', current: false },
]
const files = [
  {
    name: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    current: true,
  },
  // More files...
]
const currentFile = {
  name: 'IMG_4985.HEIC',
  size: '3.9 MB',
  source:
    'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  information: {
    'Uploaded by': 'Marie Culver',
    Created: 'June 8, 2020',
    'Last modified': 'June 8, 2020',
    Dimensions: '4032 x 3024',
    Resolution: '72 x 72',
  },
  sharedWith: [
    {
      id: 1,
      name: 'Aimee Douglas',
      imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80',
    },
    {
      id: 2,
      name: 'Andrea McMillan',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full overflow-hidden">
        ```
      */}
     <div>
        {/* Content area */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="w-full">
            <div className="relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm">
              <button
                type="button"
                className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3BottomLeftIcon className="w-6 h-6" aria-hidden="true" />
              </button>
              <div className="flex justify-between flex-1 px-4 sm:px-6">
                <div className="flex flex-1">
                  <form className="flex w-full md:ml-0" action="#" method="GET">
                    <label htmlFor="desktop-search-field" className="sr-only">
                      Search all files
                    </label>
                    <label htmlFor="mobile-search-field" className="sr-only">
                      Search all files
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                        <MagnifyingGlassIcon className="flex-shrink-0 w-5 h-5" aria-hidden="true" />
                      </div>
                      <input
                        name="mobile-search-field"
                        id="mobile-search-field"
                        className="w-full h-full py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 border-transparent focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:hidden"
                        placeholder="Search"
                        type="search"
                      />
                      <input
                        name="desktop-search-field"
                        id="desktop-search-field"
                        className="hidden w-full h-full py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 border-transparent focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:block"
                        placeholder="Search all files"
                        type="search"
                      />
                    </div>
                  </form>
                </div>
                <div className="flex items-center ml-2 space-x-4 sm:ml-6 sm:space-x-6">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative flex-shrink-0">
                    <div>
                      <Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <Image
                          className="w-8 h-8 rounded-full"
                          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                          alt=""
                        />
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
                      <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  <button
                    type="button"
                    className="flex items-center justify-center p-1 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <PlusIconOutline className="w-6 h-6" aria-hidden="true" />
                    <span className="sr-only">Add file</span>
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <div className="flex items-stretch flex-1 overflow-hidden">
            <main className="flex-1 overflow-y-auto">
              <div className="px-4 pt-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex">
                  <h1 className="flex-1 text-2xl font-bold text-gray-900">Photos</h1>
                  <div className="ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden">
                    <button
                      type="button"
                      className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <Bars4Icon className="w-5 h-5" aria-hidden="true" />
                      <span className="sr-only">Use list view</span>
                    </button>
                    <button
                      type="button"
                      className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <Squares2X2IconMini className="w-5 h-5" aria-hidden="true" />
                      <span className="sr-only">Use grid view</span>
                    </button>
                  </div>
                </div>

                {/* Tabs */}
                <div className="mt-3 sm:mt-2">
                  <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">
                      Select a tab
                    </label>
                    {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                    <select
                      id="tabs"
                      name="tabs"
                      className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue="Recently Viewed"
                    >
                      <option>Recently Viewed</option>
                      <option>Recently Added</option>
                      <option>Favorited</option>
                    </select>
                  </div>
                  <div className="hidden sm:block">
                    <div className="flex items-center border-b border-gray-200">
                      <nav className="flex flex-1 -mb-px space-x-6 xl:space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                          <a
                            key={tab.name}
                            href={tab.href}
                            aria-current={tab.current ? 'page' : undefined}
                            className={classNames(
                              tab.current
                                ? 'border-indigo-500 text-indigo-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                              'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                            )}
                          >
                            {tab.name}
                          </a>
                        ))}
                      </nav>
                      <div className="ml-6 hidden items-center rounded-lg bg-gray-100 p-0.5 sm:flex">
                        <button
                          type="button"
                          className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                          <Bars4Icon className="w-5 h-5" aria-hidden="true" />
                          <span className="sr-only">Use list view</span>
                        </button>
                        <button
                          type="button"
                          className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                          <Squares2X2IconMini className="w-5 h-5" aria-hidden="true" />
                          <span className="sr-only">Use grid view</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gallery */}
                <section className="pb-16 mt-8" aria-labelledby="gallery-heading">
                  <h2 id="gallery-heading" className="sr-only">
                    Recently viewed
                  </h2>
                  <ul
                    role="list"
                    className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                  >
                    {files.map((file) => (
                      <li key={file.name} className="relative">
                        <div
                          className={classNames(
                            file.current
                              ? 'ring-2 ring-offset-2 ring-indigo-500'
                              : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500',
                            'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden'
                          )}
                        >
                          <Image
                            src={file.source}
                            alt=""
                            className={classNames(
                              file.current ? '' : 'group-hover:opacity-75',
                              'object-cover pointer-events-none'
                            )}
                          />
                          <button type="button" className="absolute inset-0 focus:outline-none">
                            <span className="sr-only">View details for {file.name}</span>
                          </button>
                        </div>
                        <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none">
                          {file.name}
                        </p>
                        <p className="block text-sm font-medium text-gray-500 pointer-events-none">{file.size}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </main>

            {/* Details sidebar */}
            <aside className="hidden p-8 overflow-y-auto bg-white border-l border-gray-200 w-96 lg:block">
              <div className="pb-16 space-y-6">
                <div>
                  <div className="block w-full overflow-hidden rounded-lg aspect-w-10 aspect-h-7">
                    <Image src={currentFile.source} alt="" className="object-cover" />
                  </div>
                  <div className="flex items-start justify-between mt-4">
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">
                        <span className="sr-only">Details for </span>
                        {currentFile.name}
                      </h2>
                      <p className="text-sm font-medium text-gray-500">{currentFile.size}</p>
                    </div>
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 ml-4 text-gray-400 bg-white rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <HeartIcon className="w-6 h-6" aria-hidden="true" />
                      <span className="sr-only">Favorite</span>
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Information</h3>
                  <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                    {Object.keys(currentFile.information).map((key) => (
                      <div key={key} className="flex justify-between py-3 text-sm font-medium">
                        <dt className="text-gray-500">{key}</dt>
                        <dd className="text-gray-900 whitespace-nowrap">{currentFile.information[key]}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Description</h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm italic text-gray-500">Add a description to this image.</p>
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 text-gray-400 bg-white rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <PencilIcon className="w-5 h-5" aria-hidden="true" />
                      <span className="sr-only">Add description</span>
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Shared with</h3>
                  <ul role="list" className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                    {currentFile.sharedWith.map((person) => (
                      <li key={person.id} className="flex items-center justify-between py-3">
                        <div className="flex items-center">
                          <Image src={person.imageUrl} alt="" className="w-8 h-8 rounded-full" />
                          <p className="ml-4 text-sm font-medium text-gray-900">{person.name}</p>
                        </div>
                        <button
                          type="button"
                          className="ml-6 text-sm font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Remove<span className="sr-only"> {person.name}</span>
                        </button>
                      </li>
                    ))}
                    <li className="flex items-center justify-between py-2">
                      <button
                        type="button"
                        className="flex items-center p-1 -ml-1 bg-white rounded-md group focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <span className="flex items-center justify-center w-8 h-8 text-gray-400 border-2 border-gray-300 border-dashed rounded-full">
                          <PlusIconMini className="w-5 h-5" aria-hidden="true" />
                        </span>
                        <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                          Share
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="flex-1 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Download
                  </button>
                  <button
                    type="button"
                    className="flex-1 px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}