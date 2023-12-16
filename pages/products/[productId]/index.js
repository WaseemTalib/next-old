import React from 'react'
import { useRouter } from 'next/router'

function Product({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    <h2>Loading....</h2>
  }

  return (
    <h2>{product?.id} - {product?.title} - {product?.price} - {product?.description}</h2>
  )
}

export default Product

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(`http://localhost:4000/products/${params.productId}`);
  const product = await response.json();
  return {
    props: {
      product: product
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: '1' } }],
    fallback: true
  }
}