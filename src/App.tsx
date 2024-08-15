import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './layouts/Layouts';
import ProductDescription from './pages/ProductDescription';
import Home from './pages/Home';

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layouts />} >
          <Route index  element={<Home />} />
          <Route path='product/:id' element={<ProductDescription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;