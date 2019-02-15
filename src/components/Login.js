import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router'


class Login extends Component {

    state = {
        userName: '',
        isCorrect: false,
        goToChat: false
    }



    handleChange = (event) => {
        const userName = event.target.value
        const isCorrect = /^[a-zA-Z0-9]+$/.test(userName)
        this.setState({ userName, isCorrect })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        const goToChat = true

        this.setState({ goToChat })
    }

    render() {
        if (this.state.goToChat) {
            return (<Redirect to={`/pseudo/${this.state.userName}`} />)
        }
        return (
            <Fragment>

                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-4 offset-sm-4 bg-primary' style={{ textAlign: 'center', marginTop: '150px', borderRadius: '10px' }} >

                            <form className='form-group' onSubmit={this.handleSubmit} style={{ margin: '25px' }}>

                                <input type='text' className='form-control' placeholder='Your Pseudo ...' onChange={this.handleChange} value={this.state.userName} />
                                <button
                                    className='btn btn-dark'
                                    type='submit'
                                    disabled={!this.state.isCorrect}
                                    style={{ marginTop: '50px' }}> Submit ! </button>
                            </form>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Login