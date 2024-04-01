import { useState, useEffect } from 'react'

import data from '../data/products.json'
import ItemDetail from './ItemDetail'

function ItemDetailContainer () {
  const [product, setProduct] = useState([])

  // Efecto secundario para obtener los datos
  useEffect(() => {
    const promesa = new Promise((resolve) => {
      // Simular retraso de red
      setTimeout(() => resolve(data), 2000)
    })

    promesa.then((data) => { setProduct(data[0]) })
  }, [])

  return (
    <>
      <ItemDetail {...product} />
    </>
  )
}

export default ItemDetailContainer
