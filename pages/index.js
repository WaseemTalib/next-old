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
      <h2>Get Static Props Practice</h2>
      <h4> <Link href="/users">Users</Link> </h4>
      <h4> <Link href="/posts">Posts Page</Link> </h4>
      <h2>Static Page</h2>
      <h4><Link href={'/blog'}>Blog</Link></h4>
      <h4><Link href={'/products'}>Products</Link></h4>
      <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default Home