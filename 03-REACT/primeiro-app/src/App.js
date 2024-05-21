import Nome from './components/Nome';

// componente sempre com a primeira letra maiúscula
function App(){
  return(
    <div>
      <h1>Componente App</h1>
      <Nome aluno="Nícolas" idade="19"/>
      <br/>
      <Nome aluno="Ana" idade="56"/>
    </div>
  );
}

export default App;