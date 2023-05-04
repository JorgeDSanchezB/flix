import Logo from "../Logo";
import { StyledBox } from "../UI";
import { colores } from "../UI/variables";

const Footer= ()=>{
return <StyledBox style={{justifyContent: "center", borderBottom: "4px solid", borderBottomColor: colores.cLacre }}>
  <Logo/>
</StyledBox>
}

export default Footer