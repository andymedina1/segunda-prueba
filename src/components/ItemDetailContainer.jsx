import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from './ItemDetail'

import db from '../services/firebase'
import { doc, getDoc } from 'firebase/firestore'

function ItemDetailContainer () {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const { id } = useParams()

  const refDoc = doc(db, 'items', id)

  useEffect(() => {
    getDoc(refDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const newItem = { id: snapshot.id, ...snapshot.data() }
          setItem(newItem)
        } else {
          setError(true)
        }
        setLoading(false)
      })
  }, [id])

  if (error) {
    return <h1 className='text-center m-5'>NOT FOUND 404</h1>
  }

  if (loading) {
    return <h1 className='text-center m-5'>Loading...</h1>
  }

  return <ItemDetail item={item} />
}

export default ItemDetailContainer
