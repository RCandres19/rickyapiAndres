import React from 'react'
import { Link } from 'react-router-dom'

export default function RickyCard({character}) {
  return (
    <div className='card'>
        <img  src={character.image} alt={character.name} />
        <div className='card-body'>
            <Link to={`/individual/${character.id}`}>
                <buttom className = 'btn' key = {character.id}>Detalles</buttom>
            </Link>
        </div>
    </div>
  )
}
