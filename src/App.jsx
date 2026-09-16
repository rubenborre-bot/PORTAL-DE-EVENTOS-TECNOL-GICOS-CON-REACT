import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './components/Header'
import EventCard from './components/EventCard'
import Footer from './components/Footer'
import RegistrationForm from './components/RegistrationForm'
import './App.css'

function App() {
  const eventCard = [
    {
      id: 1,
      nombre: "Curso de react",
      evento: "React",
        categoria: "Desarrollo",
        fecha: "15 de septiembre",
        modalidad: "Presencial",
        lugar: "Auditorio principal",
        descripcion: "Curso introductorio de react." 
    },
    {
      id: 2,
      nombre: "Introducción a CSS",
      evento: "CSS",
        categoria: "Desarrollo",
        fecha: "15 de septiembre",
        modalidad: "Presencial",
        lugar: "Auditorio principal",
        descripcion: "Aprender a dar estilos a tus paginas." 
    },
    {
      id: 3,
      nombre: "Curso de HTML",
      evento: "HTML",
        categoria: "Desarrollo",
        fecha: "15 de septiembre",
        modalidad: "Presencial",
        lugar: "Auditorio principal",
        descripcion: "Aprende a estructurar tus paginas con html." 
    },
    {
      id: 4,
      nombre: "Introducción a JavaScript",
      evento: "JavaScript",
      categoria: "Desarrollo",
      fecha: "15 de septiembre",
      modalidad: "Presencial",
      lugar: "Auditorio principal",
      descripcion: "Aprenderas con javaScript como hacer que tus paginas sean interactivas." 
    },
    {
      id: 5,
      nombre: "Curso de Python",
      evento: "Python",
      categoria: "Desarrollo",
      fecha: "15 de septiembre",
      modalidad: "Presencial",
      lugar: "Auditorio principal",
      descripcion: "Adquiere bases en python." 
    },
    {
        id: 6,
        nombre: "Introducción a POO con Java",
        evento: "POO con Java",
        categoria: "Desarrollo",
        fecha: "15 de septiembre",
        modalidad: "Presencial",
        lugar: "Auditorio principal",
        descripcion: "Introducción a POO con Java." 

    }
  ]
  return (
    <div>
      <Header />
      <main>
        <h2>Cursos disponibles</h2>
        {eventCard.map((evento)=>(
<EventCard

key= {evento.id}
nombre = {evento.nombre}
categoria = {evento.categoria}
fecha = {evento.fecha}
modalidad = {evento.modalidad}
lugar = {evento.lugar}
descripcion = {evento.descripcion}

/>
))}

<RegistrationForm 
evento = {eventCard}
/>


       
       
      </main>
     <Footer /> 
    </div>    
  );
}

export default App;
