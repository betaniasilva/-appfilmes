import './Titulo.css'

function Titulo() {
  return (
    <div className="titulo">
      <img src="./cinema.webp" alt="Logo" className='logo' />
      <div>
        <h1>App Minha Lista de Filmes</h1>
        <h2>Cadastro e Avaliação Pessoal de Filmes</h2>
      </div>
    </div>
  )
}

export default Titulo