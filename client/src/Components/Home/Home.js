import './Home.scss';
import {Link} from 'react-router-dom'


function Home () {
    return(
        <main className='Home'>
            <h1 className='Home__welcome'>welcome to project pantry!</h1>
            <Link className='Home__link' to='/search'><button className='Home__button'>let's get started</button></Link> {/*can use a link and disguise it as a button*/}
        </main>
    )
}

export default Home;