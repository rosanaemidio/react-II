import React from 'react'


function CaixaTexto(props) {

    function validaCampo(evento){
        const {value, name} = evento.target //destructuring (desestruturando) possibilita extrair dados do objeto
        if(props.required && value.trim() === ''){
            props.onChange(name, value, 'Campo obrigatório')
            return
        }

        if(props.minLength && value.length < props.minLength){
            props.onChange(name,value, `Digite pelo menos ${props.minLength} caracteres`)
            return
        }

        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(props.type === 'email' && !regex.test(value)){
            props.onChange(name,value, 'Digite um email válido!')
            return
        }

        
        props.onChange(name, value)
    }
    return(
        <input
            name={props.name}
            type='text'
            className='campo'
            placeholder={props.placeholder}
            onChange={validaCampo}
        />
    )

}
export default CaixaTexto