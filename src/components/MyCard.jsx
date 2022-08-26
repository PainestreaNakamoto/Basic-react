import React from 'react'
import '../MyCard.css'

function MyCard(props) {
  return (
    <div>
        <div className='card'>
            <img src={props.coverimage} alt='This is image' style={{width: "100%"}}/>
            
            <div className='container'>
                <h4>{props.name}</h4>
                <p>{props.detail}</p>
            </div>
        </div>
    </div>
  )
}

export default MyCard