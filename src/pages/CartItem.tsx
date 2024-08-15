import { useDispatch, } from 'react-redux';
import { addCart, changeQuantity } from '../redux/slice/cartSlice';

const CartItem = (props: any) => {

    const { image, price, quantity, title, id } = props.item;
    const dispatch = useDispatch();


    const incrementProduct = (id: any,) => {
        const da: any = { id: id }
        dispatch(addCart(da));
    }

    const decrementProduct = (id: any, quantity: any) => {
        const da: any = { id: id, quantity: quantity }
        dispatch(changeQuantity(da));
    }
    const quantityTotal = quantity * price.toFixed(2);

    return (
        <div className='flex justify-between items-center text-white p-2 border-b-2 border-slate-600 gap-5 bg-slate-600 rounded-xl'>
            <img src={image} alt="test" className='w-12' />
            <div>{title}</div>
            <div>${quantityTotal}</div>
            <div className='flex w-20 justify-between gap-2'>
                <button onClick={() => decrementProduct(id, quantity)} className='rounded-full bg-gray-200 w-6 h-6 text-cyan-800 font-extrabold'>-</button>
                <span>{quantity}</span>
                <button onClick={() => incrementProduct(id)} className='rounded-full bg-gray-200 w-6 h-6 text-cyan-800 font-extrabold'>+</button>
            </div>
        </div>
    )
}

export default CartItem