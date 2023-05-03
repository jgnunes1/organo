import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

//aerofuntion para que as informações do Formulario vão para index.js
export const Formulario = () => {
//Aqui a connstante que dará os itens

        const times = [
          'Programação',
          'Front-End',
          'Data Science',
          'Devops',
          'UX e Design',
          'Mobile',
          'Inovação e Gestão'
        ]
 //Uma função para o onSubmit

 const aoSalvar = (evento) => {
   evento.preventDefault()
   console.log ('Form foi submetido')
 }

  //JSX
  return(
        <section className="formulario">

            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar os cards dos funcionários</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto  label="Imagem" placeholder="Cole aqui o endereço da imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>

        </section>
  )
}
