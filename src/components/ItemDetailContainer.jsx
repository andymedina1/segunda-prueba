import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import data from '../data/products.json'
import ItemDetail from './ItemDetail'

function ItemDetailContainer () {
  const [product, setProduct] = useState(null)

  const { id } = useParams()

  // Efecto secundario para obtener los datos
  useEffect(() => {
    const promesa = new Promise((resolve) => {
      // Simular retraso de red
      setTimeout(() => resolve(data), 2000)
    })

    promesa.then((data) => {
      setProduct(data.find((product) => product.id === Number(id)))
    })
  }, [id])

  return (
    <>
      {product === null
        ? <h1 className='text-center m-5'>Loading...</h1>
        : <ItemDetail {...product} />}
    </>
  )
}

export default ItemDetailContainer
