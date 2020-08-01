import React from 'react'


const CharacterCard = props => {

return (
<div className = 'Card-Container'>
     <h1>Rick and Morty and Friends</h1>          
          <img className='photo'>{props.image}</img>
             <p className='name'>Name: {props.name}</p>
          <p className='gender'>Gender: {props.gender}</p>
         <p className='location'>Location: {props.location.name}</p>
       <p class='species'>Species: {props.species}</p>
     <p className='status'>Status: {props.status}</p>
 </div>
)
}

export default CharacterCard