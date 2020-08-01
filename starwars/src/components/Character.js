// Write your Character component here
import React, { useEffect, useState } from 'react'
import CharacterCard from './components/CharacterCard'
import axios from 'axios'

export default function Character() {

    const [ data, setData ] = useState([])
  
    useEffect(() => {
       axios.get('https://rickandmortyapi.com/api/character/[1,2,3,4,5,6]')
        .then(response => {
            console.log('success!', response)
            setData(response.data)
          })
         .catch(error => console.log('oh no!', error))
    }, [])


    return (
        <div className='RickMorty' >
            < CharacterCard key={data.id} data={data} />
        </div>
    )
}