import styled from "styled-components"
import { Link } from "react-router-dom"
import logo from "../../activos/img/logo.jpg";


const StyledLogo = styled.img`
height: 60px;
width: 60px;
`

const Logo=()=>{
    return <Link to={`/`}>
         <StyledLogo src={logo} alt="Logo Flix"/>
    </Link>
}

export default Logo