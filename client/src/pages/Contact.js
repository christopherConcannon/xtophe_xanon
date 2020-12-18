import React from 'react'

const Contact = () => {
  return (
    <React.Fragment>
      
    <div className="Contact showcase">
      <h1>Contact</h1>
      <p>Raised to the south of Austin, Xtophe Xanon photographs instilled with memory and darkened by nightlife.  Climb up on the house and kosmonaut money will ask 'what is all this thusness?'.  Have you ever been?  Can I ride?  The stair spangled daemons are real.  They are standing still.  Still. </p>
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name='name' required />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name='email' required />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea
            name='message'
            rows='5'
            required
            defaultValue='Please send your message here...'
            // value='Please send your message here...'
          ></textarea>
        </div>
      </form>
    </div>  
    </React.Fragment>
  )
}

export default Contact
