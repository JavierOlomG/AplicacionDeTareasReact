import React, { useState , useEffect} from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../hojas-de-estilo/ListaDeTareas.css"



function ListaDeTareas() {

    const [tareas, setTareas] = useState([])

    useEffect(() => {
        if (localStorage.length > 0) {
            const tareasRecuperadas = [];
            for (let [key, value] of Object.entries(localStorage)) {
                const objetoLocalStorage = JSON.parse(value)
                tareasRecuperadas.push(objetoLocalStorage);
            }
            setTareas(tareasRecuperadas);
        }
    }, []);


    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {                //Aqui verificamos que la cadena no esta vacia
            tarea.texto = tarea.texto.trim() //trim quita los espacios en blanco
            const tareasActualizadas = [tarea, ...tareas]  // con ... metemos tarea en tareas
            setTareas(tareasActualizadas)
            //Vamos añadir la info al local storage para que no se borre al actualizar
            localStorage.setItem(`tarea-${tarea.id}`, JSON.stringify(tarea))
        }
    };

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTareas(tareasActualizadas)
        //Borramos la info del localStorage
        localStorage.removeItem(`tarea-${id}`)
    };

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada
                localStorage.setItem(`tarea-${tarea.id}`, JSON.stringify(tarea))
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
        
    }

    //Esto <> vacio porque react lo permite, ya que te obliga a que toda la estructura de un componente este en un solo bloque,generalmente he estado usando divs
    return (
        <>
            <TareaFormulario
                onSubmit={agregarTarea}
            />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />
                    )
                }
            </div>
        </>
    );
}


export default ListaDeTareas