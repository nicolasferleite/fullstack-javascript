import { Link } from 'react-router-dom';

function Sobre() {
    return (
      <div>
        <h1>Bem-vindo a página SOBRE</h1>
        <span>Desde 2011</span> <br/> <br/>
        
        <Link to="/">Home</Link> <br/>
        <Link to="/contato">Contato</Link>
      </div>
    );
  }
  
export default Sobre;