import React from 'react'
import Formulario from './Formulario'

import  './styles.css'
import Sucesso from './Sucesso'

class Contato extends React.Component {
    constructor (props){
        super(props)
        this.state={
            conteudo: 'formulario'
        }
    }

    handleMudaConteudo =(proximaPagina) => {
        this.setState({
            conteudo: proximaPagina
        })
    }

    render(){
        return(
            <section className='contato'>
            {
                this.state.conteudo === 'formulario' && //Se for true, você executa
                <Formulario
                mudaConteudo={this.handleMudaConteudo}
                />
            }

            {
                this.state.conteudo === 'sucesso' &&
                <Sucesso 
                mudaConteudo = {this.handleMudaConteudo }/>
            }
        
            </section>
        )
    }
}

export default Contato