import React from 'react'

const PeticionApi = () => {
    const [personajes, setPersonajes] = React.useState([])
    const [paginacion, setPaginacion] = React.useState(1)


    const obtenerPersonajes = async (paginacion) => {
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${paginacion}`);
            const data = await res.json();
            const results = await data.results;
            setPersonajes(results)
        } catch (error) {
            console.log(error);
        }
    };
    const Siguiente = () => {
        setPaginacion(paginacion + 1)
        obtenerPersonajes()
    }
    const atras = () => {
        if(paginacion > 0) {
        setPaginacion(paginacion - 1)
        obtenerPersonajes()
    };
}
    return (
        <>
            <h1>Peticion de rick and morty</h1>
            <button onClick={obtenerPersonajes}>TraerPersonajes</button>
            <button onClick={Siguiente}>Siguiente</button>
            <button onClick={atras}>Atras</button>
            {
                personajes.map(({ id, name, image }) => (
                    <div key={id}>
                        <h4 key={id}>{id}- {name}</h4>)
                        <img src={image} alt={name} />
                    </div>

                ))
            }
        </>
    )

}

export default PeticionApi