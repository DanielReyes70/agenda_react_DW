import React from 'react'

const Variable = () => {
    const saludo = "hola mundo"
    const imagen =  "https://picsum.photos/300"
    const texto_alt = "esto es una imagen de picsum"
    return (
        <>
            <h1>{saludo}</h1>
            <img src={imagen} alt={texto_alt} />
        </>
    )
}

export default Variable