import React from 'react'
import './Form.css'

const Form = () => {
  return (
      <>
          <div className="form">
              <form action="">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" />
                  <label htmlFor="email">Your Email</label>
                  <input type="email" />
                  <label htmlFor="Phone">Your Phone</label>
                  <input type="number" />
                  <label htmlFor="mess">Your Message</label>
                  <textarea rows="7" placeholder='Type Your Needs' />

                  <button className='btn' type='submit'>Submit</button>
              </form>
          </div>
      </>
  )
}

export default Form
