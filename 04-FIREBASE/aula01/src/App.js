import { db } from './firebaseConnection';
import { doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'

import './app.css';
import { useState } from 'react'

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState([]);
  const [idPost, setIdPost] = useState('');

  async function handleAdd(){
    await addDoc(collection(db, "posts"), {
      titulo  : titulo,
      autor: autor
    })
    .then(() => {
      console.log("DADOS REGISTRADOS NO BANCO!")
      setAutor('')
      setTitulo('')
    })
    .catch((error) => {
      console.log("ERRO" + error)
    })
  }

  async function buscarPost(){
    const postsRef = collection(db, "posts");
    await getDocs(postsRef)

    .then((snapshot) => {
      let lista = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          autor: doc.data().autor,
          titulo: doc.data().titulo
        })
      })

      setPosts(lista);
    })
    .catch((error) => {
      console.log("DEU ALGUM ERRO AO BUSCAR: " + error)
    })
  }

  async function editarPost(){
    const docRef = doc(db, "posts", idPost);
    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor,
    })
    .then(() => {
      console.log("POST ATUALIZADO!")
      setIdPost('')
      setAutor('')
      setTitulo('')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  async function excluirPost(id) {
    const docRef = doc(db, "posts", id)
    await deleteDoc(docRef)
    .then(() => {
      alert("POST DELETADO COM SUCESSO!")
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="App">
      <h1>ReactJS + Firebase</h1>

      <div className="container">
        <label>ID do Post:</label>
        <input
          type="text"
          placeholder="ID do post"
          value={idPost}
          onChange={(e) => setIdPost(e.target.value)}
        ></input>

        <label>Autor:</label>
        <input
          type="text"
          placeholder="Autor do post"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        ></input>

        <label>Título:</label>
        <textarea
          type="text"
          placeholder="Digite o título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        ></textarea>

        <button className='interacoes' onClick={handleAdd}>Cadastrar</button>
        <button className='interacoes' onClick={buscarPost}>Buscar Post</button>
        <button className='interacoes' onClick={editarPost} >Atualizar Post</button>

        <ul>
          {posts.map((post) => {
            return(
              <li key={post.id}>
                <strong>ID: {post.id}</strong> <br />
                <span>Autor: {post.autor}</span> <br/>
                <span>Título: {post.titulo}</span>  <br/>
                <button onClick={() => excluirPost(post.id)} >Excluir</button> <br />
              </li>
            )
          })}
        </ul>

      </div>
    </div>
  );
}

export default App;