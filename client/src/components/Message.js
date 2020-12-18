import React from 'react'

const Message = ({ children })=> {
  return (
    <div>
      	<p className='Message-text'>{children}</p>
    </div>
  )
}

export default Message