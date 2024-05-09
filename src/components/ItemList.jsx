import Item from './Item'

function ItemList ({ products }) {
  return (
    <main className='d-flex justify-content-center gap-5 my-5 mx-auto w-75 flex-wrap'>
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </main>
  )
}

export default ItemList
