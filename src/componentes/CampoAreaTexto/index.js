import { CajaTexto,EtiquetaTexto,CAreaTexto } from "../UI";

const CampoAreaTexto=({mensaje_default, titulo,required,actualizarValores,valores,value})=>{
    const placeholderModificado = `${mensaje_default}...`
    const manejarCambio=(e)=>{
        actualizarValores({...valores,[titulo.toLowerCase()]: e.target.value});
    }
    return <CajaTexto>
        <EtiquetaTexto>{titulo}</EtiquetaTexto>
        <CAreaTexto placeholder={placeholderModificado} onChange={manejarCambio} required={required} value={value}/>
    </CajaTexto>
}

export default CampoAreaTexto