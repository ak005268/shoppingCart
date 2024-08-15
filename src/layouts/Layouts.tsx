import React from 'react'
import Header from '../pages/Header'
import { Outlet } from 'react-router-dom'
import CartTab from '../pages/CartTab'

const Layouts = () => {
    return (
        <div className='bg-zinc-200'>
            <main className='w-[1200px] max-w-full m-auto p-5'>
                <Header />
                <Outlet />
            </main>
            <CartTab />
        </div>
    )
}

export default Layouts