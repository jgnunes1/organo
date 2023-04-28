
import CampoTexto from '../CampoTexto'
import './Formulario.css'
//aerofuntion para que as informações do Formulario vão para index.js
export const Formulario = () => {
  //JSX
  return(
        <section className="formulario">

            <form>
                <h2> Preencha os dados para criar os cards dos funcionários</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Cole aqui o endereço da imagem"/>
            </form>

        </section>
  )
}
