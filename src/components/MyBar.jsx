import React from 'react'
import '../Mybar.css'

function MyBar() {
  return (
    <div>
        <ul>
            <li><a href='/' className='active'>MyApp</a></li>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>

        </ul>
    </div>
  )
}

export default MyBar