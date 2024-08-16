import React from 'react'
import Header from '../pages/Header'
import { Outlet } from 'react-router-dom'
import CartTab from '../pages/CartTab'
import { Toaster } from 'sonner'
import PrivateRouter from '../helper/PrivateRouter'

const Layouts = () => {
    return (
        <PrivateRouter >

            <div className='bg-zinc-200'>
                <main className='w-[1200px] max-w-full h-screen m-auto p-5'>
                    <Header />
                    <Outlet />
                </main>
                <Toaster position='top-center' />
                <CartTab />
            </div>
        </PrivateRouter>
    )
}

export default Layouts