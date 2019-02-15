import React,  {Fragment} from 'react'

const Message = ({message,pseudo}) =>{
   

    return(
        <Fragment>
            
            <div 
                className={(pseudo === 'me' ) ? 'alert alert-primary' : 'alert alert-success'} 
                style={{textAlign: (pseudo === 'me' ) ? 'right' : null }}
            >
              { pseudo }: {message}
            </div>
        </Fragment>
    )
}

export default Message