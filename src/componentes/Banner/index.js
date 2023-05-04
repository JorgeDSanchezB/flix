import VideoCard from "../Carousel/VideoCard"
import { Styledh1,Styledh2,StyledCajaTextoBanner,StyledBanner, StyledMagicTrick } from "../UI"

const Banner=(props)=>{
    return <StyledBanner>
        
        <StyledCajaTextoBanner>
            <Styledh1>TIO J CHANNEL</Styledh1>
            <Styledh2>Canal de Youtube</Styledh2>
            <Styledh2>Especializado en contenido de alta calidad en juegos</Styledh2>
        </StyledCajaTextoBanner>
        <StyledMagicTrick>
            <VideoCard url='https://www.youtube.com/embed/n-EUuN7BGX8' titulo='Video para banner'/>
        </StyledMagicTrick>
        
    </StyledBanner>
}
export default Banner