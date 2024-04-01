import { useState, useEffect } from 'react'

import data from '../data/products.json'

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
      {products.map(product =>
        <h1 className='text-center mt-5' key={product.id}>
          {product.title}
        </h1>)}
    </>
  )
}

export default ItemListContainer
