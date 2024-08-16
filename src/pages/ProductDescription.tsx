import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addCart, changeQuantity } from '../redux/slice/cartSlice';
import { toast } from 'sonner';
import iconGif from '../assets/icons/added.gif'


const ProductDescription = () => {

    const selectedItems = useSelector((state: any) => state.cart.items);
    const param = useParams();
    const data: any = JSON.parse(localStorage?.getItem('products') || '[]');
    const matchProduct = data?.find((i: any) => i?.id === + (param?.id || 0));
    console.log('matchProduct=>', matchProduct)

    useEffect(() => {
        const a = selectedItems.find((i: any) => i.id === +(param?.id || 0))
        setQuantity(a?.quantity || 0);

    }, [selectedItems, param?.id])

    const [quantity, setQuantity] = useState(0);

    const dispatch = useDispatch();

    const incrementProduct = () => {
        
        toast(<div className='flex gap-3 font-bold justify-center items-center'><img src={iconGif} alt='success' /> Successfully added to cart</div>)
        dispatch(addCart(matchProduct));
    }
    
    const decrementProduct = () => {
        toast(<div className='flex gap-3 font-bold justify-center items-center'><img src={iconGif} alt='success' /> Successfully removed to cart</div>)

        dispatch(changeQuantity(matchProduct));
    }

    return (
        <div>
            <h2 className= 'text-xl my-3 lg:mt-4 lg:mb-20 lg:text-3xl text-center font-bold '>Product Details</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5'>
                <div className='w-full justify-center items-center'>
                    <img src={matchProduct.image} alt="test" className='w-[300px] ' />
                </div>

                <div className='flex flex-col gap-5'>
                    <h1 className='text-3xl font-semibold'>{matchProduct.title} <span className='text-xs font-bold text-green-950'>({matchProduct?.category})</span> </h1>
                    <p className='text-base font-extrabold'>$ {matchProduct.price}</p>
                  <div className='flex gap-5 items-center'>
                  <div className='text-sm font-bold rounded-md px-2 bg-[#388e3c] text-white w-fit py-1'> {matchProduct.rating.rate} ☆</div>
                  <p className='text-base font-medium text-[#878787]'> {matchProduct.rating.count} Ratings </p>
                  </div>

                    <div className='flex gap-5'>
                        <div className='flex gap-2 justify-center items-center'>
                            <button disabled={quantity <= 0} onClick={decrementProduct} className='w-10 bg-gray-100 flex h-[40px] font-bold text-xl rounded-xl justify-center items-center'>-</button>
                            <span className='w-10 bg-gray-200 flex h-full font-bold text-xl rounded-xl justify-center items-center'>{quantity}</span>
                            <button onClick={incrementProduct} className='w-10 bg-gray-100 flex h-[40px] font-bold text-xl rounded-xl justify-center items-center'>+</button>
                        </div>
                        <button onClick={incrementProduct} className='px-10 py-3 bg-sky-950 text-white text-lg rounded-2xl shadow-lg'>
                            Add Cart
                        </button>
                    </div>
                    <div>
                        {matchProduct.description}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductDescription