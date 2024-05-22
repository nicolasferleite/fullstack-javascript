import { useState } from 'react';

// componente sempre com a primeira letra maiúscula
function App(){
  const [aluno, setAluno] = useState('Nícolas');

  function handleChangeName (nome){
    setAluno(nome);
  }

  return(
    <div>
      <h1>Componente App</h1>
      <h2>Olá {aluno}</h2>
      <button onClick={() => {handleChangeName('Nícolas Ferreira')}}>
        Mudar nome
      </button>
    </div>
  );
}

export default App;