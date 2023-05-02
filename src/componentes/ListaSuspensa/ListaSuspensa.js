import './ListaSuspensa.css'


export const ListaSuspensa = (props) => {
        console.log(props.itens)
  return(
        <div>

            <label>{props.label}</label>
            <select>
                    {props.itens.map(item => {
                  return <option>{item}</option>
                    })}
            </select>

        </div>
  )
}