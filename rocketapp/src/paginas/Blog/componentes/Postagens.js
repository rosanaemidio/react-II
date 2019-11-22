import React from 'react'
import './styles.css'


function Postagens(props){
    return(
        <div className='postagem'>
            <h2>{props.post.title}</h2>
            <p>{props.post.body}</p>
            <button className='botao'><a href='https://br.pinterest.com/pin/510314201507333381/' target='blank'>Saiba Mais</a></button>
     
        </div>
        
    )

}
export default Postagens