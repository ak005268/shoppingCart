import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { changeTab } from '../redux/slice/cartSlice'

const CartTab = () => {

  const carts = useSelector((state: any) => state.cart)
  const dispatch = useDispatch()

  const handel = () => {
    dispatch(changeTab(''))
  };

  const toPay = carts?.items?.reduce((acc: any, curr: any) => {
    return acc + curr.quantity * curr.price;
  }, 0).toFixed(2)



  return (
    <div className={`fixed transform transition-transform duration-500 ${carts.tabStatus && ' translate-x-full '} top-0 right-0 w-96 grid grid-rows-[60px_1fr_60px] h-full bg-gray-700 shadow-xl `}>
      <h1 className='text-2xl p-5 text-white'>Shopping cart</h1>

      <div className='flex flex-col px-2 py-5 gap-5'>
        {
          carts?.items.map((item: any) => (
            <CartItem key={`carts-${item.id}`} item={item} />
          ))
        }
      </div>

      <div className='grid grid-cols-2'>
        <button onClick={handel} className='bg-black text-white'>Cancel </button>
        <button className='bg-amber-600 text-white'> Total  ${toPay}</button>
      </div>
    </div>
  )
}

export default CartTab