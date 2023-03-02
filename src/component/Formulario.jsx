import { useState } from 'react'
import { useContext } from 'react'
import { Contexto } from './TareaContext'

function Formulario({ }) {

    const { crearTarea } = useContext(Contexto)
    const [TItulo, setTitulo] = useState("")

    const manejaSubmit = (e) => {
        e.preventDefault();

        crearTarea(TItulo)
    }

    return (
        <div>

            <form onSubmit={manejaSubmit} className="bg-slate-900 p-10 mb-4 max-w-md mx-auto">
                <h1 className='text-2xl text-white px-2 mb-3 text-left'>Crea tu tarea</h1>
                <input className='bg-slate-300 p-3 w-full mb-2' onChange={(e) => setTitulo(e.target.value)}></input>
                <button className='bg-indigo-500 px-3 py-1 text-white'>enviar</button>
            </form>
        </div>
    )
}

export default Formulario