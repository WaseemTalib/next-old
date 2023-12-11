import React from 'react'
import { useRouter } from 'next/router'

function Product() {
  const router = useRouter();
  const productId = router.query.productId
  return (
    <div>Product details Page {productId}</div>
  )
}

export default Product