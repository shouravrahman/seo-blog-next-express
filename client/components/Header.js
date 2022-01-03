import React, { useState } from 'react'
import Button from './Button'

const Header = () => {
	let Links = [
		{ name: 'Home', link: '/' },
		{ name: 'Service', link: '/' },
		{ name: 'Login', link: '/' },
		// { name: "BLOG'S", link: '/' },
		{ name: 'Contact', link: '/' },
	]
	let [open, setOpen] = useState(false)
	return (
		<div className='shadow-md w-full fixed top-0 left-0 font-lato'>
			<div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
				<div
					className='font-bold text-2xl cursor-pointer flex items-center
      text-gray-800'>
					<span className='text-3xl text-indigo-600 mr-1 pt-2'>
						<ion-icon name='diamond-outline'></ion-icon>
					</span>
					Blog
				</div>

				<div
					onClick={() => setOpen(!open)}
					className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
					<ion-icon name={open ? 'close' : 'menu'}></ion-icon>
				</div>

				<ul
					className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? 'top-20 opacity-100' : 'top-[-490px]'
					} md:opacity-100 opacity-100`}>
					{/* //search */}
					<div className=' mr-1 md:ml-8 text-xl md:my-0 my-7'>
						<div className='relative'>
							<span className='absolute inset-y-0 left-0 flex items-center pl-1'>
								<div className='text-3xl text-gray-500  flex items-center pl-1'>
									<ion-icon name='search-circle-outline'></ion-icon>
								</div>
							</span>

							<input
								type='text'
								class=' w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
							/>
						</div>
					</div>

					{Links.map((link) => (
						<li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
							<a
								href={link.link}
								className='text-gray-800 hover:text-gray-400 duration-500'>
								{link.name}
							</a>
						</li>
					))}
					<Button>Get Started</Button>
				</ul>
			</div>
		</div>
	)
}

export default Header
