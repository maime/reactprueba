import {useContext} from 'react'
import {Contexto} from './TareaContext'

function ListaTareas({ }) {

    const {QuitarTarea} = useContext(Contexto);
    const {info} = useContext(Contexto);

    if (info.length == 0) {
        return <h1 className='text-white text-center text-4xl font-bold'>Sin info para mostrar</h1>
    }

    return (
        <>
            {info.map((fila) => (
                <div key={fila.id} className="bg-gray-800 text-white p-4 rounded-md">
                    <h1 className='text-xl font-bold capitalize'>{fila.titulo}</h1>
                    <p className='text-gray-200 text-sm'>{fila.mensaje}</p>
                    <button className='bg-blue-400 px-2 py-1 mt-4 rounded-md hover:bg-red-500' onClick={() => QuitarTarea(fila.id)}>Eliminar Fila</button>
                </div>
            ))}
        </>
    )
}

export default ListaTareas