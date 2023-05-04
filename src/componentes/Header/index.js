import { colores } from "../UI/variables";
import Boton from "../Boton";
import Logo from "../Logo";
import { StyledBox } from "../UI";
import { Link } from "react-router-dom";

const Header= ()=>{
return <StyledBox>
    <Logo/>
    <Link to={`/nuevo-video`}>
        <Boton colorFondo={colores.cNegro} colorLetra={colores.cBlanco} borde={'si'}>
        Nuevo video
        </Boton>
    </Link>

</StyledBox>
}

export default Header