import { Toaster, toast } from 'sonner';
import Estrelas from './Estrelas';
import './ItemLista.css'
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from 'react';

function ItemLista({filme, filmes, setFilmes, deletarFilme}) {
  
  function avaliaFilme() {
    const nota = Number(prompt(`Qual a nota do filme "${filme.titulo}"`))
    const comentario = prompt("Qual o seu comentário sobre o filme?")

  const filmes2 = [...filmes]

  const indice = filmes2.findIndex(x => x.titulo == filme.titulo)

  filmes2[indice].nota = nota
  filmes2[indice].comentario = comentario

  setFilmes(filmes2)
  localStorage.setItem("filmes", JSON.stringify(filmes2))
  toast.warning("Ok!Filme avaliado com sucesso!")

  }

  return (
    <div className="grid-item">
      <div>
        <button onClick={deletarFilme}>Deletar</button>
      </div>
      <img src={filme.foto} alt="Filme" className='foto'/>
      <div>
        <h3>{filme.titulo}</h3>
        <p className='genero'>{filme.genero} - {filme.duracao} min</p>
        <p className='texto-sinopse'>{filme.sinopse}</p>
        {filme.nota == 0 ?
          <div>
            <img src="./novidade.png" alt="Novidade" className='novidade'/>
            <p><button onClick={avaliaFilme}>Avaliar <FaCheck /></button></p>
          </div> :
          <div>
            <Estrelas num={filme.nota} />
            <p className='comentario'>{filme.comentario}</p>
          </div>  
        }        
      </div>
    </div>
  )
}

export default ItemLista