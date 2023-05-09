import './Time.css'


export const Time = { props } => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        <section className='time' style={css}>
            <h3>style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        </section>
    )