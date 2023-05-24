
import './Banner.css'


interface BannerProps {
    enderecoImagem:string
    textoAlernativo?:string
}
//aerofuntion para que as informações do Banner vão para index.js
export const Banner = ({enderecoImagem, textoAlernativo}:BannerProps) => {
  //JSX
  return(

    <>

      <header className="banner">
       {/* <img src="/imagens/banner.png" alt="O banner principal da Página" />*/}
        <img src={enderecoImagem} alt={textoAlernativo} />
      </header>

    </>
   
  )
}
