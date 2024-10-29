import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>

      <header>


        <ul>
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </header>

      <h1>Main Page</h1>
    </div>
  )
}

export default page
