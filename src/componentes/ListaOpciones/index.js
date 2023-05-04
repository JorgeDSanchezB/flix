import { CajaTexto, EtiquetaTexto, ListaO } from "../UI";

const ListaOpciones=(props)=>{

    const {valores,setCategoria,categorias}=props
    const manejarCambio=(e)=>{
        setCategoria({...valores,categoria: e.target.value});
    }

    return <CajaTexto>
        <EtiquetaTexto>Categoria</EtiquetaTexto>
        <ListaO onChange={manejarCambio} value={valores.categoria}>
            <option value="" disabled defaultValue="" hidden>Seleccionar categoria</option>
            {categorias.map((categoria,index)=> <option key={index} >{categoria.categoria}</option>)}
        </ListaO>
    </CajaTexto>
}

export default ListaOpciones