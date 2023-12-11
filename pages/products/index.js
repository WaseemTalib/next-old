import React from 'react'
import Link from 'next/link'
function Products() {
  return (
    <div>
      <h1>Products List Page</h1>
      <h2><Link href={'/'}>Home Page</Link></h2>
      <>
        <h2>
          <Link href={'products/1'} replace>Product 1</Link>
        </h2>
        <h2>
          <Link href={'products/1'}>Product 2</Link>
        </h2>
        <h2>
          <Link href={'products/1'}>Product 3</Link>
        </h2>
      </>
    </div>
  )
}

export default Products