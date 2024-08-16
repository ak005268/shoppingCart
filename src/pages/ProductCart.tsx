import cartIcon from '../assets/icons/cartImg.png'
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/slice/cartSlice';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import iconGif from '../assets/icons/added.gif'

const ProductCart = (props: any) => {

    const { title, category, description, rating, price, image, id } = props?.item;


    const dispatch = useDispatch();

    const addProduct = (e: any) => {
        toast(<div className='flex gap-3 font-bold justify-center items-center'><img src={iconGif} alt='success' /> Successfully added to cart</div>)
        dispatch(addCart(e))
    }

    return (
        <div className='bg-white p-5 shadow-lg rounded-xl'>
            <Link to={`/product/${id}`}>
                <img src={image} alt='' className='w-full h-80 object-fill object-top drop-shadow-lg' />
            </Link>

            <h3 className='py-3 text-center text-sm'>{title}</h3>
            <div className='flex justify-between items-center'>
                <p>$
                    <span className='text-2xl font-medium '> {price} </span>
                </p>

                <button onClick={() => addProduct({ title, category, description, rating, price, image, id })} className='bg-gray-300 hover:bg-gray-400 p-3  rounded-lg text-sm flex gap-2'>
                    <img src={cartIcon} alt='cartIcon' className='w-5' />
                    Add cart
                </button>
            </div>
        </div>
    )
}

export default ProductCart