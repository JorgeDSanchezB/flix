import styled from "styled-components"
import { colores } from "../componentes/UI/variables"
import { StyledForm, StyledMagicTrick, Styledh2 } from "../componentes/UI"
import { useState } from "react"
import CampoTexto from "../componentes/CampoTexto"
import CampoAreaTexto from "../componentes/CampoAreaTexto"
import Boton from "../componentes/Boton"
import {v4 as uuid} from "uuid"


const StyledNuevaCategoria=styled.section`
    background: ${colores.cNegro};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px 0;
    align-items: center;
`
const StyledCajaBotones=styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
const StyledTabla=styled.table`
  box-sizing: border-box;
  margin: 25px auto 15px auto;
  width: 90%;
  font-weight: 600;
  font-size: 16px; 
  color: ${colores.cNegro};
  border: 2px solid ${colores.cNegro};
`
const StyledEncabezadoTabla=styled.thead`
  color: ${colores.cBlanco};
  text-align: center;
  border: 2px solid ${colores.cNegro};
  background: ${colores.cAzul};
`
const StyledTh=styled.th`
  font-size: 20px;
  padding: 5px 5px 5px 10px;
  border: 1px solid ${colores.cNegro};
  
`
const StyledTd=styled.td`
  padding:5px 5px 5px 10px;
  border: 1px solid ${colores.cNegro};
`


const NuevaCategoria=({arregloCategorias,registrarCategoria,eliminarCategoria})=>{ 

    const [Campos, setCampos] = useState({ 
        categoria : "",
        descripcion: "",
        color : colores.cAzul,
        seguridad : uuid(),
    })

    const limpiarCampos=()=>{
      setCampos({
        categoria : "",
        descripcion: "",
        color : colores.cAzul,
        seguridad : uuid(),
      })
    }

    const editarCategoria = (id) => {
      const categoriaAEditar=arregloCategorias.filter(categorias => categorias.seguridad === id)
      setCampos({
        categoria : categoriaAEditar[0].categoria,
        descripcion: categoriaAEditar[0].descripcion,
        color : categoriaAEditar[0].color,
        seguridad : id,
      })
      eliminarCategoria(id)
    }

    const actualizarColor=(e)=>{
      setCampos({...Campos,color: e.target.value});
    }

    const manejarEnvio=(e)=>{
      e.preventDefault()
      if (e.nativeEvent.submitter.name === "guardar") {
        registrarCategoria(Campos)
      }
    }

    return <StyledNuevaCategoria>

        <Styledh2 style={{}}>Nuevo Categoria</Styledh2>
        <StyledForm style={{background: colores.cGrisClaro}} onSubmit={manejarEnvio}>
        <CampoTexto 
                titulo="Categoria"
                mensaje_default="Escriba  el titulo de la categoria"
                required
                valores={Campos}
                actualizarValores={setCampos}
                value={Campos.categoria}
        />  
        <CampoAreaTexto 
            titulo="Descripcion"
            mensaje_default="Escriba una descripcion para la categoria"
            required=""
            valores={Campos}
            actualizarValores={setCampos}
            value={Campos.descripcion}
        />  
        <input 
            type="color"
            value={Campos.color}
            onChange={(e)=>(actualizarColor(e))}
        />       
        <CampoTexto 
            titulo="Seguridad"
            mensaje_default=""
            required="" 
            valores={Campos}
            actualizarValores={setCampos}
            value={Campos.seguridad}
        />
        <StyledCajaBotones>
            <Boton type="submit" name="guardar" colorFondo={colores.cAzul} colorLetra={colores.cBlanco} borde={'no'} > 
              Guardar
            </Boton>
            <Boton type="button" onClick={limpiarCampos} colorFondo={colores.cGrisClaro} colorLetra={colores.cNegro} borde={'si'}>
              Limpiar
            </Boton>
        </StyledCajaBotones>
          <StyledMagicTrick>
          <StyledTabla>
            <StyledEncabezadoTabla >
              <tr>
                <StyledTh>Título</StyledTh>
                <StyledTh>Descripción</StyledTh>
                <StyledTh>Editar</StyledTh>
                <StyledTh>Remover</StyledTh>
              </tr>
            </StyledEncabezadoTabla >
            <tbody>
              {arregloCategorias.map((categoria, index) => (
                <tr key={index}>
                  <StyledTd>{categoria.categoria}</StyledTd>
                  <StyledTd>{categoria.descripcion}</StyledTd>
                  <StyledTd>
                    <Boton type="button" onClick={()=>editarCategoria(categoria.seguridad)} colorFondo="transparent" colorLetra={colores.cNegro} borde={'no'}>
                      Editar
                    </Boton>
                  </StyledTd>
                  <StyledTd>
                    <Boton type="button" onClick={()=>eliminarCategoria(categoria.seguridad)} colorFondo="transparent" colorLetra={colores.cNegro} borde={'no'} >
                      Remover
                    </Boton>
                  </StyledTd>
                </tr>
              ))}
            </tbody>
          </StyledTabla>
          </StyledMagicTrick>
        </StyledForm>
        
    </StyledNuevaCategoria>
}

export default NuevaCategoria
/*
 onClick={()=>eliminarColaborador(id)}   
*/ 