import { useState } from "react"
function EventCard(evento){
    const [inscrito, setinscrito] = useState(false)
    const [mostrarDetalles, setMostrarDetalles] = useState(false)
    function mostrarCurso(){
        alert(`Bienbenido al curso ${evento.nombre}`)
    }
    function cambiarEstado(){
        setinscrito(!inscrito)
    }
    function cambiarDetalles(){
        setMostrarDetalles(!mostrarDetalles);
    }
     return(
        <article id="Eventos">
            <h2>{evento.nombre}</h2>
            <p>Categoria: {evento.categoria}</p>
            <p>Fecha: {evento.fecha}</p>
            
            <button onClick={mostrarCurso}>Ver el curso</button>
            <button onClick={cambiarEstado}>{inscrito? "cancelar incripcion" : "incribirme"} </button>
            <button onClick={cambiarDetalles}>{mostrarDetalles? "ocultar detalles" : "mostrar detalles"}</button>
            {mostrarDetalles && (<div>
            <p>Lugar: {evento.lugar}</p>
            <p>Modalidad: {evento.modalidad}</p>
            <p>Descripcion: {evento.descripcion}</p>
            </div>)}
            {cambiarEstado}
        </article>
     )
}
export default EventCard