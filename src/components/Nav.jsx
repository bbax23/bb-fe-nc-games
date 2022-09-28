import {useNavigate} from 'react-router-dom'

const Nav = ({setCategory}) => {

    const navigate = useNavigate();
    const handleClick = () => {
        setCategory("")
        navigate("/")
    }

    return (
        <nav>
            <button onClick={handleClick}>Home</button>
        </nav>
    )
}

export default Nav;