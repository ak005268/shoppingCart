import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [loginCre, setLoginCre] = useState({ username: '', password: '' });

    const navigate = useNavigate();

    const changeHandler = (e: any) => {
        const { name, value } = e.target;

        setLoginCre((pre) => ({
            ...pre, [name]: value
        }))
    };

    const authentication = JSON.parse(localStorage.getItem('authentication') || '');


    useEffect(() => { if (authentication) navigate('/home') }, [authentication])

    const submit = (e: any) => {
        e.preventDefault();
        if (loginCre.username === 'admin' && loginCre.password === 'admin') {
            localStorage.setItem('authentication', JSON.stringify(true))
            navigate('/home')
        }
    }

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            Login

            <form onSubmit={submit}>
                <div className='flex flex-col border border-cyan-300 p-10 shadow-lg bg-gray-200 rounded-xl' >
                    <label htmlFor='username' className='font-semibold text-sm py-1'>UserName</label>
                    <input type='text' name='username' onChange={changeHandler} className='px-3 py-2 rounded-lg' />
                    <label htmlFor='password' className='font-semibold text-sm py-1'>Password</label>
                    <input type='password' name='password' onChange={changeHandler} className='px-3 py-2 rounded-lg' />
                    <div className='w-full flex justify-center items-center pt-10'>
                        <button type='submit' className='px-5 py-2 bg-gray-300 hover:bg-gray-400 rounded-xl' >Login</button>
                    </div>
                </div>
            </form>


        </div>
    )
}

export default Login