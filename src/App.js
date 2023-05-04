import GlobalStyle from "./GlobalStyle";
import Footer from "./componentes/Fooder";
import Header from "./componentes/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./paginas/Home";
import Page404 from "./paginas/Page404";
import NuevoVideo from "./paginas/NuevoVideo";
import NuevaCategoria from "./paginas/NuevaCategoria";
import { useState,useEffect } from "react";
import { buscar } from "./api/api";




function App() {

    const [camposFormulario,setCampos]=useState([])

    useEffect(()=>{
        buscar("/camposFormulario",setCampos)
    },["/camposFormulario"])

    const [arregloCategorias,setCategoria]=useState([])

    useEffect(()=>{
        buscar("/arregloCategorias",setCategoria)
    },["/arregloCategorias"])
/*
    const [arregloVideos,setVideo]=useState([])

    useEffect(()=>{
        buscar("/arregloCategorias",setCategoria)
    },["/arregloCategorias"])
*/
/*
  const camposFormulario=[
    {
    titulo: "Nombre",
    mensaje_default: "Escriba el titulo del video",
    required: "required",
    },
    {
    titulo: "Video",
    mensaje_default: "Escriba la URL del video",
    required: "required"
    },
    {
    titulo: "Imagen",
    mensaje_default: "Escriba la URL de la imagen del video",
    required: ""
    }
  ]
  
  const [arregloCategorias, setCategoria]=useState([
    {
      categoria : "Nuevo",
      descripcion: "Videos nuevos",
      color : colores.cLacre,
      seguridad: uuid()
    },
    {
      categoria : "Lo mas visto",
      descripcion: "Los videos mas populares",
      color : colores.cGrisClaro,
      seguridad: uuid()
    },
    {
      categoria : "Para ti",
      descripcion: "Los videos recomendados para el usuario",
      color : colores.cAzulClaro,
      seguridad: uuid()
    }
  ])
  */
  const [arregloVideos, setVideo]=useState([
    {
      video : "https://www.youtube.com/embed/PhlIUq8RSuA",
      nombre : 'Video1',
      imagen : '',
      categoria : 'Nuevo',
      descripcion : '',
      seguridad : ''
    },
    {
      video : "https://www.youtube.com/embed/T6U-MFw2SDA",
      nombre : 'Video2',
      imagen : '',
      categoria : 'Nuevo',
      descripcion : '',
      seguridad : ''
    },
    {
      video : "https://www.youtube.com/embed/uGBFS9HzVwc",
      nombre : 'Video3',
      imagen : '',
      categoria : 'Nuevo',
      descripcion : '',
      seguridad : ''
    },
    {
      video : "https://www.youtube.com/embed/q-rdZqtS75M",
      nombre : 'Video4',
      imagen : '',
      categoria : 'Nuevo',
      descripcion : '',
      seguridad : ''
    },
    {
      video : "https://www.youtube.com/embed/iHCHDyFVURQ",
      nombre : 'Video5',
      imagen : '',
      categoria : 'Nuevo',
      descripcion : '',
      seguridad : ''
    },
    {
      video : "https://www.youtube.com/embed/JtYuQgvChyQ",
      nombre : 'Video6',
      imagen : '',
      categoria : 'Nuevo',
      descripcion : '',
      seguridad : ''
    },
    {
      video : "https://www.youtube.com/embed/5D62qG1GbJA",
      nombre : 'Video7',
      imagen : '',
      categoria : 'Nuevo',
      descripcion : '',
      seguridad : ''
    },
    {
      video : "https://www.youtube.com/embed/9f7ZUIovff8",
      nombre : 'Video8',
      imagen : '',
      categoria : 'Nuevo',
      descripcion : '',
      seguridad : ''
    },
    {
      video : "https://www.youtube.com/embed/T6U-MFw2SDA",
      nombre : 'Video9',
      imagen : '',
      categoria : 'Nuevo',
      descripcion : '',
      seguridad : ''
    }
  ])

  const registrarCategoria = (categoria) => {
    setCategoria([...arregloCategorias, categoria])
  }  
  const registrarVideo = (nuevoVideo) => {
    setVideo([...arregloVideos, nuevoVideo])
  }  

  const eliminarCategoria = (id) => {
    const categoriasAtualizado=arregloCategorias.filter(categorias => categorias.seguridad !== id)
    setCategoria(categoriasAtualizado)
  }
  



  return (
   <Router>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path='/' element={<Home arregloVideos={arregloVideos}/>} />
      <Route path='/nuevo-video' element={<NuevoVideo camposFormulario={camposFormulario} arregloCategorias={arregloCategorias} registrarVideo={registrarVideo}/>} />
      <Route path='/nueva-categoria' element={<NuevaCategoria arregloCategorias={arregloCategorias} registrarCategoria={registrarCategoria} eliminarCategoria={eliminarCategoria}/>} />
      <Route path='*' element={<Page404/>} />
    </Routes>
    <Footer/>

   </Router>
   
  );
}

export default App;
