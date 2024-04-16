import { Link } from 'react-router-dom';
import './Header.scss'

function Header () {
    return (
        <>
        <header className='Header'>
        
        <Link className='Header__link' to='/search'><h3 className='Header__title'>Project-Pantry</h3></Link>
        </header>
        </>
    )
}

export default Header;