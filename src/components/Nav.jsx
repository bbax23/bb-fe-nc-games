import {useNavigate} from 'react-router-dom'

const Nav = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }

    return (
        <nav>
            <button onClick={handleClick}>Home</button>
        </nav>
    )
}

export default Nav;