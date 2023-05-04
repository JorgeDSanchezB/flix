import styled from "styled-components"
import { colores } from "../componentes/UI/variables"
import { StyledForm, StyledMagicTrick, Styledh2 } from "../componentes/UI"
import { useState } from "react"
import CampoTexto from "../componentes/CampoTexto"
import CampoAreaTexto from "../componentes/CampoAreaTexto"
import Boton from "../componentes/Boton"
import ListaOpciones from "../componentes/ListaOpciones"
import { Link } from "react-router-dom"



const StyledNuevoVideo=styled.section`
    background: ${colores.cNegro};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px 0;
    align-items: center;
`
const StyledCajaGrupoBotones=styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
const StyledCajaBotones=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`


const NuevoVideo=({camposFormulario, arregloCategorias,registrarVideo})=>{ 

    const [valoresCampos, setCampos] = useState({ 
        nombre: "",
        video: "",
        imagen: "",
        categoria: "",
        descripcion:"",
        seguridad:""
    });

    const limpiarCampos=()=>{
      setCampos({
        nombre: "",
        video: "",
        imagen: "",
        categoria: "",
        descripcion:"",
        seguridad:""
      })
    }

    const manejarEnvio=(e)=>{
      e.preventDefault()
      if (e.nativeEvent.submitter.name === "guardar") {
        registrarVideo(valoresCampos)
      }
    }


    return <StyledNuevoVideo>
        <Styledh2 style={{}}>Nuevo Video</Styledh2>
        <StyledForm style={{background: colores.cGrisClaro}} onSubmit={manejarEnvio}>
        {camposFormulario.map((camposALlenar,index)=>
                <CampoTexto 
                key={index} 
                titulo={camposALlenar.titulo} 
                mensaje_default={camposALlenar.mensaje_default} 
                required={camposALlenar.required} 
                valores={valoresCampos}
                actualizarValores={setCampos}
                value={valoresCampos[camposALlenar.titulo.toLowerCase()]}
                />   
            )}
        <ListaOpciones 
             valores={valoresCampos}
             setCategoria={setCampos}
             categorias={arregloCategorias}
        />
        <CampoAreaTexto 
            titulo="Descripcion"
            mensaje_default="Escriba una descripcion"
            required=""
            valores={valoresCampos}
            actualizarValores={setCampos}
            value={valoresCampos.descripcion}
        />  
        <CampoTexto 
            titulo="Seguridad"
            mensaje_default=""
            required="" 
            valores={valoresCampos}
            actualizarValores={setCampos}
            value={valoresCampos.seguridad}
        />
        <StyledCajaBotones>
          <StyledCajaGrupoBotones>
            <Boton type="submit" name="guardar" colorFondo={colores.cAzul} colorLetra={colores.cBlanco} borde={'no'} > 
              Guardar
            </Boton>
            <Boton type="button" onClick={limpiarCampos} colorFondo={colores.cGrisClaro} colorLetra={colores.cNegro} borde={'si'}>
              Limpiar
            </Boton>
          </StyledCajaGrupoBotones>
          <StyledMagicTrick>
            <Link to={`/nuevA-categoria`}>
              <Boton colorFondo={colores.cAzul} colorLetra={colores.cBlanco} borde={'no'}>
              Nueva Categoria
              </Boton>
            </Link>
          </StyledMagicTrick>
        </StyledCajaBotones>   
        </StyledForm>
        
    </StyledNuevoVideo>
}

export default NuevoVideo
