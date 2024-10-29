import React from 'react'
import Link from 'next/link';

const Home = () => {
  return (
    <div><header>


<ul>
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
  </header>

  <h1>Home Page</h1>
  
  
  </div>
  )
}

export default Home;
