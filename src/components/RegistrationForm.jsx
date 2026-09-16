import { useState } from "react"
function RegistrationForm ({evento}){
    const [enviado, setEnviarFormulario] = useState(false);
    function Enviar(e){
        e.preventDefault();
        setEnviarFormulario(!enviado);
    }

    return(
        <form onSubmit={Enviar} id="Inscripcion">
          <label for="nombre">Nombre completo</label>
          <input type="text" id="nombre"></input>
          <label for="email">Correo electronico</label>
          <input type="email" id="email"></input>
          <label for="inscripcion">Eventos:</label>     
          <select name="inscripcion" id="inscripcion" >
            {evento.map((item)=>(
           <option key={item.id} value={item.id}>{item.evento}</option> 
           ))}
          </select>
          <button type="submit">{enviado? "Cancelar inscripcion":"Enviar inscripcion"}</button>
        </form>
    )
}
export default RegistrationForm
