import { db } from './firebaseConnection';
import { doc, setDoc, collection, addDoc, getDoc, getDocs } from 'firebase/firestore'

import './app.css';
import { useState } from 'react'

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState([]);

  async function handleAdd(){
    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor
    })
    .then(() => {
      console.log("DADOS REGISTRADOS NO BANCO")
    })
    .catch((error) => {
      console.log("ERRO" + error)
    })
  }

  async function buscarPost(){
    // Buscar apenas um post
    /*const postRef = doc(db, "posts", "12345")

    await getDoc(postRef)
    .then((snapshot) => {
      setAutor(snapshot.data().autor)
      setTitulo(snapshot.data().titulo)
    })
    .catch(() => {
      console.log("ERRO")
    })*/

    // Buscar todos os posts

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
      console.log("DEU ALGUM ERRO AO BUSCAR!")
    })
  }

  return (
    <div className="App">
      <h1>ReactJS + Firebase</h1>

      <div className="container">
        <label>Título:</label>
        <textarea
          type="text"
          placeholder="Digite o título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        ></textarea>

        <label>Autor:</label>
        <textarea
          type="text"
          placeholder="Autor do post"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        ></textarea>

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar Post</button>

        <ul>
          {posts.map((post) => {
            return(
              <li key={post.id}>
                <span>Autor: {post.autor}</span> <br/>
                <span>Título: {post.titulo}</span> <br/> <br/>
              </li>
            )
          })}
        </ul>

      </div>
    </div>
  );
}

export default App;