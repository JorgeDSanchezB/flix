import { Btn } from "../UI"

const Boton=({children,colorFondo,colorLetra,borde,name,type,onClick})=>{

    const tieneBorde= borde==='si' ? `${colorLetra}` : `${colorFondo}`  
  
    return <Btn 
    style={{
        backgroundColor: colorFondo, color: colorLetra, borderColor: tieneBorde
    }}
    name={name}
    type={type}
    onClick={onClick}
    >
        {children}
    </Btn>
}

export default Boton