import React, {Component,Fragment} from 'react'


class Formulaire extends Component {
    render () {
        const {onChange,onSubmit,message} = this.props
        return (
            <Fragment>
                <div className="container" style={{marginTop: '10px'}}>
                    <div className="row">
                        <div className="col-sm-4 offset-sm-4 col-md-4 offset-md-4">
                            <form action="" className="form-group" onSubmit={onSubmit}>
                                <input type="text" onChange={onChange} value={message}  placeholder='Your message here ...' className="form-control" />
                                <input type="submit" value="Send Message !" className="btn btn-block btn-primary " />
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Formulaire