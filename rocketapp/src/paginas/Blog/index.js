import React from 'react'
import './styles.css'
import Header from '../../componentes/Header'
import Postagens from './componentes/Postagens'
import {getPostagens} from '../../service/posts'

import './styles.css'

class Blog extends React.Component{
    constructor(props){
       super(props) 
       this.state={
            posts: ''
       }
    }

   componentDidMount(){
       getPostagens()
       .then(response =>{
           this.setState({
               posts: response.data
           })
       })
       .catch(error=>{
           console.error(error)
       })
   }

    render(){
        return(
            <main>
                <Header
                classe='blog-header'
                tituloPagina = 'Blog'
                />
                <section >
                    {this.state.posts.length > 0
                        ? this.state.posts.map(post => {
                        return <Postagens post={post} key={post.id}/>
                    })
                    : <span>Carregando mensagens :D </span>
                }
                </section>
            </main>
        )
    }
}



export default Blog