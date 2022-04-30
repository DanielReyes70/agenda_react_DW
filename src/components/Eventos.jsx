import React from 'react'

const Eventos = () => {
    const [texto, setText] = React.useState('Texto inicial')
    const eventoclick = () => setText('Cambiando el texto...')
    const resetear = () => setText('Texto inicial')
  return (
    <>
    <h2>{texto}</h2>
    <button onClick={eventoclick}>Cambiar</button>
    <button onClick={resetear}>Resetear</button>
    </>
  )
}

export default Eventos