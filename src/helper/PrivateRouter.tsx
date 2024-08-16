import { Navigate } from 'react-router-dom'

const PrivateRouter = ({ children }: any) => {

    const authentication = JSON.parse(localStorage.getItem('authentication') || 'false');


    return (authentication ? children : <Navigate to='/' replace />)

}

export default PrivateRouter