import React, { Component, Fragment ,createRef} from 'react';

import './App.css';
import { Redirect } from 'react-router-dom'
import Formulaire from './components/Formulaire';
import Message from './components/Message';


//firebase connexion
import base from './base'


class App extends Component {

  state = {
    message: '',
    pseudo: this.props.match.params.pseudo,
    messages: {}
  }

  

  componentDidMount(){
    base.syncState('/',{
      context: this,
      state: 'messages'
    })
  }

  messagesRef = createRef() 


  componentDidUpdate = () => {
    const ref= this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }



  handleChange = event => {
    const message = event.target.value

    this.setState({ message })
  }


  createMessage = () => {
    const { pseudo } = this.state
    const messages = { ...this.state.messages }
    messages[`${Date.now()}-${pseudo}`] = {
      message: this.state.message,
      pseudo: this.state.pseudo
    }

   
    Object.keys(this.state.messages)
      .slice(0, -10)
      .forEach(key => {
        messages[key] = null
      })

      this.setState({ messages })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.createMessage()

    //Reset
    this.setState({ message: '' })
  }



  render() {

    const listeMessages = Object.keys(this.state.messages)
      .map(mess => (
        <Message
          key={mess}
          message={this.state.messages[mess].message}
          pseudo={(this.state.messages[mess].pseudo === this.state.pseudo) ? 'me' : this.state.messages[mess].pseudo} />
      ))

    const pseudo = this.state.pseudo
    const isCorrect = /^[a-zA-Z0-9]+$/.test(pseudo)
    if (!isCorrect) {
      return (<Redirect to={`/`} />)
    }
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className='myInterface col-sm-8 offset-sm-2 col-md-4 offset-md-4' ref={this.messagesRef} style={{ height: '300px', width: '100%', background: '#F2F1F2', marginTop: '100px' }}>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


              {listeMessages}
            </div>
          </div>
          <Formulaire
            onChange={this.handleChange}
            pseudo={this.state.pseudo}
            onSubmit={this.handleSubmit}
            message={this.state.message}
          />
        </div>



      </Fragment>
    );
  }
}

export default App;
