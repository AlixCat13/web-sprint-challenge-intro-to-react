// Write your Character component here
import React, { useEffect } from 'react'
import axios from 'axios'

export default function Character() {
  
    useEffect(() => {
       axios.get('https://rickandmortyapi.com/api/character/')
        .then(response => {
            console.log(response)
          })
         .catch(error => console.log(error))
    }, [])


    return (
        <div className='RnM' >
            
        </div>
    )
    





}