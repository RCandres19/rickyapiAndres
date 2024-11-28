import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Rickyindividual() {
    const [individual, setIndividual] = useState([])
    const {id} = useParams()
    const [isloading, setIsloading] = useState(true)


    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((response) => {
      setIndividual(response) 
      setIsloading(false)
    }
  )

  if(isloading){
    Swal.fire({ title: "Cargando datos..." })
    Swal.showloading()
  }
  else
    Swal.close()
  
  return (

    <div className='momoPadre'>
        <div className='momoHijo'>
          <h1><img src={individual.image} alt={individual.image}/></h1>
          <h1>ID : {individual.id}</h1>
          <p>Nombre: {individual.name}</p>


          <p>Status: {individual.status}</p>
          <p>Especie: {individual.species}</p>
          <p>Type: {individual.type}</p>
          <p>Género: {individual.gender}</p>
          <p>Url: {individual.url}</p>
          <p>Fecha de creación: <date>{individual.created}</date></p>
          <Link to = {'/index'}>
            <center><button>Volver</button></center>
          </Link>
        </div>
    </div>
  )
}
