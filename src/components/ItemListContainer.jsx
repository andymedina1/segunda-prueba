import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import data from '../data/products.json'
import ItemList from './ItemList'

function ItemListContainer () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setLoading(true)
      setTimeout(() => resolve(data), 2000)
    })

    promesa.then((data) => {
      if (!category) {
        setProducts(data)
        setLoading(false)
      } else {
        const productosFiltrados = data.filter((prod) => prod.category === category)
        setProducts(productosFiltrados)
        setLoading(false)
      }
    })
  }, [category])

  return (
    <>
      {loading
        ? <h1 className='text-center m-5'>Loading...</h1>
        : <ItemList products={products} />}
    </>
  )
}

export default ItemListContainer
