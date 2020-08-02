   import React from 'react'
   
   const CharacterCard = ({ data }) => {
     return (
       
      <div>
        <div className='characters'>
       <img className='photo' alt='Character' src= {data.image} />
             <p className='name'>Name: {data.name}</p>
          <p className='gender'>Gender: {data.gender}</p>
         <p className='location'>Location: {data.location.name}</p>
       <p class='species'>Species: {data.species}</p>
     <p className='status'>Status: {data.status}</p>
     </div> 
     </div>    
     )   
    }

    export default CharacterCard;