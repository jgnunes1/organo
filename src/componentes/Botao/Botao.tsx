import { ReactElement } from 'react'
import './Botao.css'

import React from 'react';


interface BotaoProps {

    children: ReactElement

}

//aerofuntion para que as informações do Banner vão para index.js
export const Botao= (props: BotaoProps) => {
  //JSX
  return(<button className='botao'>
        {props.children}
    </button>

  )
}
