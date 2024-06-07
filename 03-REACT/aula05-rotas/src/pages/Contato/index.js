import { Link } from 'react-router-dom';

function Contato() {
    return (
      <div>
        <h1>Bem-vindo a página CONTATO</h1>
        <span>Contato da Empresa: (dd) xxxxx-xxxx </span> <br/> <br/>
        
        <Link to="/">Home</Link> <br/>
        <Link to="/sobre">Sobre</Link>
      </div>
    );
  }
  
export default Contato;