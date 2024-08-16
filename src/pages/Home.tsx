import { useEffect, useState } from 'react'
import ProductCart from './ProductCart';

const Home = () => {

  const [data, setData] = useState([]);
  const [isError, setIsError] = useState('');
  const [loading, setLoading] = useState(true);

  const apiCall = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products')
      if (!res.ok) throw new Error(`${res?.status}`)
      const resultData = await res.json();
      setData(resultData)
      setLoading(false)
    }
    catch (err: any) {
      setIsError(err?.message)
      setLoading(false)
    }
  }
  useEffect(() => {
    apiCall()
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(data))
  }, [data])

  // const cartsData = useSelector((state: any) => state.cart)

  return (
    <div>
      {loading && <div>Loading...</div>}
      {isError && <div>{isError}</div>}
      <h1 className='text-3xl my-5'>
        Product List
      </h1>

      <div className='grid md:grid-cols-3 grid-cols-1 gap-5 rounded-3xl lg:grid-cols-4 '>
        {data?.map((item: any) => (
          <ProductCart key={item?.id} item={item} />
        ))}
      </div>

    </div>
  )
}

export default Home