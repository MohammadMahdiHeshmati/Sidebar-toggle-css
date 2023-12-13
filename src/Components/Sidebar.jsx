import React from 'react'

function Sidebar() {
    return (
        <section className='sidebarArea -translate-x-full invisible 
        sidebar-wrapper'>
            <h1 className='font-semibold text-5xl 
            text-neutral-500 text-center p-4'>
                Sidebar
            </h1>
            <ul className='flex flex-col justify-start items-center'>
                <li className='li-style'>Home</li>
                <li className='li-style'>Account</li>
                <li className='li-style'>Products</li>
                <li className='li-style'>Contact</li>
                <li className='li-style'>About</li>
            </ul>
        </section>
    )
}

export default Sidebar