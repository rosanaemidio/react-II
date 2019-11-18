import React from 'react'

import './styles.css'

class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            aberto: false          
        }
    }

    handleAbreOuFecha = e =>{
        this.setState(prevState =>{
            return { aberto: !prevState.aberto}
        })

    }
    render() {
        let classesDasOpcoes = 'navbar-menu__opcoes'
        let classesDoBotao = 'navbar-menu__botao'
        if(this.state.aberto){
            classesDasOpcoes += ' navbar-menu__opcoes--aberto' //Colocar espaço após as aspas, para não concatenar.
            classesDoBotao += ' navbar-menu__botao--aberto'
        }
        return (
        <div className='nav-menu navbar-links'>
            <span className={classesDoBotao} onClick={this.handleAbreOuFecha}>
                Menu
            </span>
            <ul className={classesDasOpcoes}>
                <li>Home</li>
                <li>Contato</li>
                <li>Mensagens</li>


            </ul>

        </div>
        )
    }
}
export default Menu