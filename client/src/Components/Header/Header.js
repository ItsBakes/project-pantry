import { Link } from 'react-router-dom';
import './Header.scss'

function Header () {
    return (
        <>
        <h3 className='Header__title'>Project-Pantry</h3>
        <Link to='/search'><button>Search recipes</button></Link>
        </>
    )
}

export default Header;