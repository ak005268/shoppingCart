import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './layouts/Layouts';
import ProductDescription from './pages/ProductDescription';
import Home from './pages/Home';
import Login from './pages/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/' element={<Layouts />} >
          <Route path='/home' element={<Home />} />
          <Route path='/product/:id' element={<ProductDescription />} />
        </Route>
        <Route path='*' element={<div>
          Page not found 404
        </div>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;