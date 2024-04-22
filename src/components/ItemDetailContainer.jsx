import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import data from '../data/products.json'
import ItemDetail from './ItemDetail'

function ItemDetailContainer () {
  const [item, setItem] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => resolve(data), 2000)
    })

    promesa.then((data) => {
      setItem(data.find((item) => item.id === Number(id)))
    })
  }, [id])

  return (
    <>
      {item === null
        ? <h1 className='text-center m-5'>Loading...</h1>
        : <ItemDetail item={item} />}
    </>
  )
}

export default ItemDetailContainer
