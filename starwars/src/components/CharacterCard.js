   import React from 'react'
   import styled from 'styled-components'

  const CharacText = styled.p `
   color: black; 
   font-weight: bold;  
   `;

   const Photo = styled.img `
   margin-top: 2%;
   `;
   
   const CharacterCard = ({ data }) => {
     return (
       
      <div>
        <div className='characters'>
       <Photo className='photo' alt='Character' src= {data.image} />
             <CharacText className='name'>Name: {data.name}</CharacText>
          <CharacText className='gender'>Gender: {data.gender}</CharacText>
         <CharacText className='location'>Location: {data.location.name}</CharacText>
       <CharacText class='species'>Species: {data.species}</CharacText>
     <CharacText className='status'>Status: {data.status}</CharacText>
     </div> 
     </div>    
     )   
    }

    export default CharacterCard;