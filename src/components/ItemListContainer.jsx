import { useState, useEffect } from 'react'

import data from '../data/products.json'
import ItemList from './ItemList'

function ItemListContainer () {
  const [products, setProducts] = useState([])

  // Efecto secundario para obtener los datos
  useEffect(() => {
    const promesa = new Promise((resolve) => {
      // Simular retraso de red
      setTimeout(() => resolve(data), 2000)
    })

    promesa.then((data) => { setProducts(data) })
  }, [])

  return (
    <>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer
