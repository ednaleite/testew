import React, {Component} from 'react'
import {Alert,Badge} from 'reactstrap'
import {connect} from 'react-redux'
import '../chat/chat.css';


class ChatConversa extends Component{
  
   renderMensagem(msg,k){
    

     
   return (
            <div key = {k}>
          {
              msg.origem === "user" && <span>
                 
              {/* <Badge color='info' id="usertalk">Você disse</Badge> */}
             
            <div className='usuario'>

            <div id='textouc'>
                    <Alert color='info' id='teste'>{msg.texto}</Alert>
               </div>

                <div>
                    <img src='images/duvidas.png' id='userconversa'/>
                </div>
               
           </div>
            
        </span>
          
          }

          {
            msg.origem === "bot" && <span>
                <div className='iracema'>
                    <div>
            <img src='images/iracema.jpg' id='botconversa'/>
                    </div>
                    <div id='textobc'>
            <Alert color='dark' id='teste2'>{msg.texto}</Alert>
                    </div>
            </div>
            </span>
          }
             </div>


      )
 }
   
   
    render(){
    
        return(
             <div className='chat-conversa'>
                {
                   Object.keys(this.props.mensagens).map(key => {
                        return this.renderMensagem(this.props.mensagens[key],key)
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        mensagens: state.chat.mensagens
    }
}

export default connect(mapStateToProps, null)(ChatConversa)