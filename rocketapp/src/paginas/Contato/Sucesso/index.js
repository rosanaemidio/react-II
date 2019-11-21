import React from 'react'
import Botao from '../Formulario/componentes/Botao'

function Sucesso (props) {
    return (
        <div className='pagina'>
            <h1>O formulario foi enviado com as batatas!</h1>
            <Botao
                mudaConteudo={props.mudaConteudo}
                pagina='formulario'
                type='button'
            > 
            Voltar </Botao>
        </div>
    )
}
export default Sucesso