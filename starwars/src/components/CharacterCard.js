import React from 'react'


const CharacterCard = ({ data }) => {

return (
<div className = 'Card-Container'>
     <h1>Rick and Morty and Friends</h1>          
          <img className='photo'>{data.image}</img>
             <p className='name'>{data.name}</p>
          <p className='gender'>{data.gender}</p>
         <p className='location'>{data.location.name}</p>
       <p class='species'>{data.species}</p>
     <p className='status'>{data.status}</p>
 </div>
)
}

export default CharacterCard