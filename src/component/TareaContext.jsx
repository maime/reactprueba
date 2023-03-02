import { createContext, useState, useEffect } from 'react'
import { info as data } from '../info'

export const Contexto = createContext();
export function TareaContextProvider(props) {

    const [info, setInfo] = useState([]);
    function crearTarea(titulo) {
        setInfo([...info, {
            id: info.length,
            titulo: titulo,
            mensaje: "asdas"
        }])
    }

    function QuitarTarea(id) {
        setInfo(info.filter(n => n.id != id))
    }

    useEffect(() => {
        setInfo(data)
      }, [])

    return (
        <Contexto.Provider value={
            {
                info: info,
                crearTarea: crearTarea,
                QuitarTarea: QuitarTarea
            }
        }>
            {props.children}
        </Contexto.Provider>
    )
}

