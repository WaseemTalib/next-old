import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/products')
  }

  return (
    <div>
    <h1>Home Page</h1>
    <h2><Link href={'/blog'}>Blog</Link></h2>
    <h2><Link href={'/products'}>Products</Link></h2>
    <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default Home