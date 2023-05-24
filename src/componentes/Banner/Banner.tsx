
import './Banner.css'


interface BannerProps {
    enderecoImagem:string
    textoAlternativo?:string
}
//aerofuntion para que as informações do Banner vão para index.js
export const Banner = ({enderecoImagem, textoAlternativo}:BannerProps) => {
  // JSX
  return (
    <header className="banner">
      {/* <img src="" alt="O banner principal da página do Organo"/> */}
      <img src={enderecoImagem} alt={textoAlternativo} />
    </header>
  )
}
  