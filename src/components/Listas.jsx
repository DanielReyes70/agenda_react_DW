import React from 'react'

const Listas = () => {
    const estadoInicial = [
        {id: 1,texto: 'tarea 1'},
        {id: 2,texto: 'tarea 2'},
        {id: 3,texto: 'tarea 3'},
        {id: 4,texto: 'tarea 4'},
        {id: 5,texto: 'tarea 5'},
        {id: 6,texto: 'tarea 6'},
    ]
    const [Lista, setLista] = React.useState(estadoInicial)
  return (
    <>
    <hr/>
    <h1>Listas</h1>
    {
        Lista.map((item)=><h4 key={item.id}>{item.texto}</h4>)
    }
    </>
  )
}

export default Listas