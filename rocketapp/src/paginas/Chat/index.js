import React from 'react'
import { getMensagens } from '../../service/mensagens'

import './styles.css'
import Mensagem from './componentes'
import Header from '../../componentes/Header'

class Chat extends React.Component{
    constructor(props){
        super (props)
        this.state={
            mensagens: ''
        }
    }

    componentDidMount(){
        getMensagens()
            .then(response =>{
                this.setState({
                    mensagens: response.data
                })
            })
            .catch(error =>{
                console.error(error)
            })
    }

    render(){
        return(
            <main>
                <Header
                classe= 'chat-header'
                tituloPagina= 'Mensagens'
                />
                <section className='chat'>
                    {this.state.mensagens.length > 0
                        ? this.state.mensagens.map(mensagem => {
                        return <Mensagem mensagem={mensagem} key={mensagem.id}/>
                    })
                    : <span>Carregando mensagens :D </span>
                }
                </section>
            </main>
        )
    }
}
export default Chat