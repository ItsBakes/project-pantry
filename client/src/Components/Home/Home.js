import './Home.scss';
import {Link} from 'react-router-dom'


function Home () {
    return(
        <main className='Home'>
            <h1 className='Home__welcome'>welcome to project pantry!</h1>
            <Link className='Home__link' to={}><button className='Home__button'>let's get started</button></Link>
        </main>
    )
}

export default Home;