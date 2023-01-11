import React from "react";
import "../hojas-de-estilo/Tarea.css"
// Para usar los iconos de react, previamente hay que ejecutar npm install react-icons --save , tambien puedes ver la doc googleando react-icons
//Realmente estos iconos funcionan como componentes de react por eso para usarlos usamos la sintaxis de componentes <AiOutlineCloseCircle />
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({id, texto, completada,completarTarea,eliminarTarea}){
    return(
        <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div className="tarea-texto" onClick={()=> completarTarea(id)}>
                {texto}
            </div>
            <div className="tarea-contenedor-iconos" onClick={()=> eliminarTarea(id)}>
            <AiOutlineCloseCircle className="tarea-icono"/>
            </div>
        </div>
    )
}

export default Tarea