import React from 'react'

const Contador = () => {
  const [contador, setContador] = React.useState(0)
  const aumentar = () => setContador(contador + 1)
  const decrementar = () => setContador(contador - 1)

  return (
    <>

      <hr />
      <h1>Contador</h1>
      <h1>El valor de la variable contador es: {contador}</h1>
      <h1>
        {contador < 0 ? 'contador es negativo' : 'el contador es positivo'}
      </h1>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={decrementar}>decrementar</button>




    </>
  )
}

export default Contador