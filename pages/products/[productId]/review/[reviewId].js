import React from 'react'
import { useRouter } from 'next/router'

function Product() {
  const router = useRouter();
  const {reviewId, productId} = router.query
  return (
    <div>Review {reviewId} and product {productId}</div>
  )
}

export default Product