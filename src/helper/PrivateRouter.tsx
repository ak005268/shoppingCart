import { Navigate } from 'react-router-dom'

const PrivateRouter = ({ children }: any) => {

    const authItem = localStorage.getItem('authentication');
    const authentication = authItem ? JSON.parse(authItem) : false;


    return (authentication ? children : <Navigate to='/' replace />)

}

export default PrivateRouter