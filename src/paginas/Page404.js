import image from "../activos/img/doguito404.svg"
import '../activos/css/404.css'

const Page404 = () => {
    return (
        <main className="container flex flex--center flex--column">
            <img className="dog-image" src={image} alt="Doguito" />
            <p className="notfound-text">Esta página no existe</p>
        </main>
    )
}

export default Page404