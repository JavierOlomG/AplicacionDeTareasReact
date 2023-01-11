import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../hojas-de-estilo/ListaDeTareas.css"



function ListaDeTareas() {

    const [tareas, setTareas] = useState([])

    const agregarTarea = tarea => {
        console.log(tarea);
        if (tarea.texto.trim()) {                //Aqui verificamos que la cadena no esta vacia
            tarea.texto = tarea.texto.trim() //trim quita los espacios en blanco
            const tareasActualizadas = [tarea, ...tareas]  // con ... convertimos de un array a un elemento individual
            setTareas(tareasActualizadas)
        }
    };

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTareas(tareasActualizadas)
    };

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada
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