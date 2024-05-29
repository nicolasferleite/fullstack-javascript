import { useState, useEffect } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('@tarefa');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas]); //toda vez o array tarefas sofrer alteração, ele salva

  function handleRegister(e){
    e.preventDefault();

    setTarefas([...tarefas, input]); // pego todas e dps adiciona a q estiver no input
    setInput(''); // limpo o input
  }

  return (
    <div>
      <h1>Cadastrando Usuário</h1>

      <form onSubmit={handleRegister}>
        <label>Nome da Tarefa: </label>
        <input 
          type="text" 
          placeholder="Digite uma tarefa" 
          value={input}
          onChange={(event => setInput(event.target.value))}
        />       
        <br/> <br/>

        <button type="submit">Registrar</button>
      </form> <br/>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
