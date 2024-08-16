import { Link, useNavigate } from 'react-router-dom';
import cartImg from '../assets/icons/cartImg.png'
import { useDispatch, useSelector } from 'react-redux';
import { changeTab } from '../redux/slice/cartSlice';

const Header = () => {
    const cart = useSelector((state: any) => state.cart);
    const dispatch = useDispatch()
    const handel = () => {
        dispatch(changeTab(''))
    };
    const navigate = useNavigate()

    const LogoutHandler = () => {
        localStorage.setItem('authentication', JSON.stringify(false))

        navigate('/')
    }

    return (
        <header className=' flex justify-between'>
            <Link to='/' className='text-xl font-semibold'> Home </Link>

            <div className='flex gap-5'>
                <button type='button' onClick={handel} className='h-10 w-10 bg-white rounded-full flex justify-center items-center relative'>
                    <img src={cartImg} className='w-6' alt='ig' />
                    <span className='absolute top-2/3 right-1/2 bg-red-600 text-xs text-white w-5 h-5 rounded-full flex justify-center items-center'>{cart.items?.length}</span>
                </button>
                <button type='button' onClick={LogoutHandler} className='bg-slate-400 px-5 rounded-2xl '>Logout</button>
            </div>

        </header>
    )
}

export default Header