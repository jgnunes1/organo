import './Botao.css'
//aerofuntion para que as informações do Banner vão para index.js
export const Botao= (props) => {
  //JSX
  return(<button className='botao'>
        {props.children}
    </button>

  )
}
