import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import data from '../data/products.json'
import ItemList from './ItemList'

function ItemListContainer () {
  const [products, setProducts] = useState([])
  const { id } = useParams()

  // Efecto secundario para obtener los datos
  useEffect(() => {
    const promesa = new Promise((resolve) => {
      // Simular retraso de red
      setTimeout(() => resolve(data), 2000)
    })

    promesa.then((data) => {
      if (!id) {
        // Si no hay un id en la ruta, muestro todos los productos
        setProducts(data)
      } else {
        // Si la ruta tiene un id, filtro los productos por categoría
        const productosFiltrados = data.filter((prod) => prod.category === Number(id))
        setProducts(productosFiltrados)
      }
    })
  }, [id])

  return (
    <>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer
