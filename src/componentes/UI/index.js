import styled from "styled-components";
import { colores } from "./variables";
import banner from "../../activos/img/banner.jpg"

//Boton varios usus
export const Btn = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  padding: 8px 20px;
//Colores base del boton
  color: ${colores.cNegro};
  background: ${colores.cBlanco};
  border: 1px solid ${colores.cNegro};
`;
//h1 estilizado de la pagina
export const Styledh1= styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    background: transparent;
    color: ${colores.cLacre};
    font-size: 40px;
    margin: 8px;
    text-shadow: 2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black;
`
//h2 estilizado de la pagina
export const Styledh2= styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    font-weight: 300;
    background: transparent;
    color: ${colores.cBlanco};
    font-size: 24px;
    margin: 8px;
    text-shadow: 1px 0 0 black, -1px 0 0 black, 0 1px 0 black, 0 -1px 0 black;
`
//seccion banner estilizada
export const StyledBanner= styled.section`
display: flex;
background-image: url(${banner});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
height: 260px;
justify-content: space-around;
align-items: center;
box-sizing: border-box;
border-bottom: 3px solid ${colores.cLacre};
`
//Caja texto para banner
export const StyledCajaTextoBanner= styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    box-sizing: border-box;
    background: ${colores.cLacreSuave};
`
//Header, Footer
 export const StyledBox = styled.section`
  background-color: ${colores.cNegro};
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  height: 70px;
  align-items: center;
  border-bottom: 2px solid ${colores.cLacre};
  border-top: 2px solid ${colores.cLacre};
`

 export const StyledForm=styled.form`
    width: 60%;
    background-color: #f7f7f7;
    box-shadow: 7px 7px 15px rgba(0, 0, 0, 25%);
    border-radius: 5px;
    padding: 10px 15px;
   
`
//Caja texto para campo texto en formulario
export const CajaTexto = styled.div`
    margin: 10px 0;
    font-family: 'Montserrat', sans-serif;
`
//Etiquetaa para campo texto en formulario
export const EtiquetaTexto = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 600;
  display: block;
  margin-bottom: 8px;
`
//Cuadro de ingreso de informacion 'imput' para campo texto en formulario
export const CTexto = styled.input`
  width: 100%;
  background-color: #FFFFFF;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  border:none;
  padding: 10px 10px;
  outline-color: #6278F7;
  font-size: 16px;
  box-sizing: border-box;
`
export const CAreaTexto = styled.textarea`
  width: 100%;
  background-color: #FFFFFF;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  border:none;
  padding: 10px 10px;
  outline-color: #6278F7;
  font-size: 16px;
  box-sizing: border-box;
  resize: none; /* Deshabilita la redimensión del textarea */
  height: 4.5em; /* Altura de 3 líneas */
  line-height: 1.5em; /* Altura de línea */
  overflow-y: hidden; /* Oculta el desbordamiento vertical */
`

export const ListaO= styled.select`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  padding: 24px;
  border: none;
  outline-color: #6278F7;
  font-size: 16px;
`
export const StyledMagicTrick= styled.div`
  
  @media (max-width: 768px) {
    display: none;
}
`
