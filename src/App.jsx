import Titulo from "./components/Titulo"
import ItemLista from "./components/ItemLista"
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import NovoFilme from "./components/NovoFilme"
import './App.css'
import { useEffect, useState } from "react"

function App() {
  const [filmes, setFilmes] = useState([])
  const [inputFiltro, setInputFiltro] = useState()

  const [open, setOpen] = useState(false);
  

  useEffect(() => {
    if (localStorage.getItem("filmes")) {
      const filmes2 = JSON.parse(localStorage.getItem("filmes"))
      setFilmes(filmes2)
    }
  }, [])


  const deletarFilme = (index) => {

    const data = filmes?.filter((_, i) => index !== i)

    setFilmes(data)

    const filmesLocalStorage = JSON.stringify(data)

    localStorage.removeItem('filmes')
    localStorage.setItem('filmes', filmesLocalStorage)
  }

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  const listaFilmes = filmes.map((filme, index) => (
    <ItemLista key={filme.titulo} filme={filme}
    filmes={filmes} setFilmes={setFilmes} deletarFilme={() => deletarFilme(index)} />
  ))

  return (
    <>
      <Titulo />
      <div className="container">
        
        <div className="lista-botao">
          <h1>Lista dos Filmes Cadastrados</h1>
          <button onClick={onOpenModal} className="bt-novo">Novo Filme</button>
  
        </div>

        <Modal open={open} onClose={onCloseModal} center>
        <NovoFilme filmes={filmes} setFilmes={setFilmes}/>
        </Modal>

        <div>
          <input value={inputFiltro} onChange={(e) => setInputFiltro(e.target.value)} />
        </div>
        <div className="grid-container">
          {listaFilmes}
        </div>
      </div>
    </>
  )
}

export default App
