import { useState } from 'react';

function App() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [idade, setIdade] = useState();

  const[user, setUser] = useState({});

  function handleRegister(e){
    e.preventDefault();

    setUser({
      nome: nome,
      email: email,
      idade: idade
    });
  }

  return (
    <div>
      <h1>Cadastrando Usuário</h1>

      <form onSubmit={handleRegister}>
        <label>Nome: </label>
        <input 
          type="text" 
          placeholder="Digite seu nome..." 
          value={nome}
          onChange={(event => setNome(event.target.value))}
        />
        
        <br/> <br/>

        <label>Email: </label>
        <input 
          type="email" 
          placeholder="Digite seu email..." 
          value={email}
          onChange={(event => setEmail(event.target.value))}
        />
        <br/> <br/>

        <label>Idade: </label>
        <input 
          type="text" 
          placeholder="Digite sua idade..." 
          value={idade}
          onChange={(event => setIdade(event.target.value))}
        />
        <br/> <br/>

        <button type="submit">Registrar</button>
      </form> <br/>

      <div>
        <span>Nome: {user.nome}</span> <br/>
        <span>Email: {user.email}</span> <br/>
        <span>Idade: {user.idade}</span>
      </div>
      
    </div>
  );
}

export default App;
