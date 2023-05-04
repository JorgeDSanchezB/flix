import styled from "styled-components"
import { colores } from "../../UI/variables"

const StyledVideo = styled.iframe` 
  height: 300;
  width: 200;
  border: 2px solid ${colores.cLacre};
  border-radius: 4px;
`

const VideoCard=(props)=>{
    return <StyledVideo
        src={props.url}
        title={props.titulo}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
  ></StyledVideo>
}

export default VideoCard