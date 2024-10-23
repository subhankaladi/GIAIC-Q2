'use client'



import React ,{ useState } from 'react'
import './Landing.css'

import  { useRouter } from 'next/navigation';


const Landing = () => {

    const handleNavigation = (path: string) => {
        alert('Please Enter Your Name!'); 
      };


      const router = useRouter();
      const [userName, setUserName] = useState(''); 
    
    
    
    
      const handleEnter = () => {
        console.log("Button clicked, username:", userName);
        if (userName.trim()) {
          router.push('/mainpage');
        } else {
          alert('Please Enter Your Name!');
        }
      };


  return (
    <div>



<aside className="LP-navbar">
        <h2 className='Subhan-h2'>SUBHAN</h2>
        <ul className="LP-inner-list">
          <li onClick={() => handleNavigation('/home')}>Home</li>
          <li onClick={() => handleNavigation('/about')}>About</li>
          <li onClick={() => handleNavigation('/portfolio')}>Portfolio</li>
          <li onClick={() => handleNavigation('/news')}>News</li>
          <li onClick={() => handleNavigation('/contact')}>Contact</li>
        </ul>
      </aside>



      <div className="lp-container">
      {/* Left Section */}
      <div className="left-section">
        <h1>Welcome To Digital Wealth!</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="LP-button" onClick={handleEnter}>Enter</button>
        
      </div>

      {/* Right Section */}
      <div className="right-section">
        <img 
          src="/sk2.png" 
          alt="Profile" 
          className="profile-image" 
        />
      </div>
    </div>




    </div>
  )
}

export default Landing