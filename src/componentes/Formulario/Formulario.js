import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

//aerofuntion para que as informações do Formulario vão para index.js
export const Formulario = (props) => {
//Aqui a connstante que dará os itens

       
        const [nome, setNome] = useState('')
        const [cargo, setCargo] = useState('')
        const [imagem, setImagem] = useState('')
        const [time, setTime] = useState('')


 //Uma função para o onSubmit

 const aoSalvar = (evento) => {
   evento.preventDefault()
   props.aoColaboradorCadastrado({
    nome,
    cargo,
    imagem,
    time
   })
 }

  //JSX
  return(
        <section className="formulario">

            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar os cards dos funcionários</h2>
                <CampoTexto
                 obrigatorio={true} 
                 label="Nome" 
                 placeholder="Digite seu nome"
                 valor={nome}
                 aoAlterado={valor =>setNome(valor)}
                 />
                <CampoTexto 
                obrigatorio={true} 
                label="Cargo"
                 placeholder="Digite seu cargo"
                 valor={cargo}
                 aoAlterado={valor => setCargo(valor)}
                  />
                <CampoTexto 
                 label="Imagem" 
                 placeholder="Cole aqui o endereço da imagem"
                 valor={imagem}
                 aoAlterado={valor => setImagem(valor)}
                 />
                <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                 />
                <Botao>
                    Criar Card
                </Botao>
            </form>

        </section>
  )
}
