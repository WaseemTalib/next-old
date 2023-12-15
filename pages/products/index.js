import React from 'react'
import Link from 'next/link'
function Products({ products }) {
  return (
    <div>
      <h1>Products List Page</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>
            <Link href={`products/${product.id}`}>{product.title} - {product.price}</Link>
          </h2>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Products


export async function getStaticProps() {
  const response = await fetch('http://localhost:4000/products');
  const products = await response.json()
  return {
    props: {
      products: products
    },
    revalidate: 5
  }
}