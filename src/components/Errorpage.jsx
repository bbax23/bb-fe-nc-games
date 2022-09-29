import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <header>
            <h1>error 404: page not found </h1>
            <Link to="/">Back to home</Link>
        </header>
    )     
}

export default Errorpage;