import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import data from '../data/products.json'
import ItemList from './ItemList'

function ItemListContainer () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  // Efecto secundario para obtener los datos
  useEffect(() => {
    const promesa = new Promise((resolve) => {
      // Simular retraso de red
      setLoading(true)
      setTimeout(() => resolve(data), 2000)
    })

    promesa.then((data) => {
      if (!id) {
        // Si no hay un id en la ruta, muestro todos los productos
        setProducts(data)
        setLoading(false)
      } else {
        // Si la ruta tiene un id, filtro los productos por categoría
        const productosFiltrados = data.filter((prod) => prod.category === id)
        setProducts(productosFiltrados)
        setLoading(false)
      }
    })
  }, [id])

  return (
    <>
      {loading
        ? <h1 className='text-center m-5'>Loading...</h1>
        : <ItemList products={products} />}
    </>
  )
}

export default ItemListContainer
