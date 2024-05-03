import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from './ItemDetail'

import { app } from '../App'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

function ItemDetailContainer () {
  const [item, setItem] = useState(null)

  const { id } = useParams()

  const db = getFirestore(app)
  const refDoc = doc(db, 'items', id)

  useEffect(() => {
    getDoc(refDoc).then((snapshot) => {
      const newItem = { id: snapshot.id, ...snapshot.data() }
      setItem(newItem)
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
