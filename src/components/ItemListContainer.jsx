import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ItemList from './ItemList'

import db from '../services/firebase'
import { collection, getDocs } from 'firebase/firestore'

function ItemListContainer () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()

  const refCollection = collection(db, 'items')

  useEffect(() => {
    let data
    getDocs(refCollection)
      .then((snapshot) => {
        data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        return data
      })
      .then((data) => {
        if (!category) {
          setProducts(data)
          setLoading(false)
        } else {
          const productosFiltrados = data.filter(
            (prod) => prod.category === category
          )
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
