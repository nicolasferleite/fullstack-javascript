import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <h2>Sujeito Dev</h2> <br/>
            <div>
                <Link to="/">HOME</Link>
                <Link to="/sobre">SOBRE</Link>
                <Link to="/contato">CONTATO</Link>
            </div>
        </header>
    )
}

export default Header;