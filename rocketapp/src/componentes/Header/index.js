import React from 'react'
import './styles.css'

function Header (props){
    return(
        <section className={props.classe}>
            <h1>{props.tituloPagina}</h1>

{/* <h1>A era da comunicação intergalática!</h1> */}

        </section>
    )

}
export default Header