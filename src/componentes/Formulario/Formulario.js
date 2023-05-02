
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


  //JSX
  return(
        <section className="formulario">

            <form>
                <h2> Preencha os dados para criar os cards dos funcionários</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Cole aqui o endereço da imagem"/>
                <ListaSuspensa itens={times} />
            </form>

        </section>
  )
}
