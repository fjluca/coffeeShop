import React from 'react'
import '../styles/Contact.css'
import NavBar from '../components/NavBar'

const Contact = () => {
  return (
    <>  
          <NavBar/>
          <div className='contactBg'>
            <div className='contactContainer'>
            <div>
              <h1>contact us</h1>
            </div>
            <div>
                <h4>We'd love to hear from you!</h4>
            </div>
            <div>
                <div>
                  <div>
                    <input type="text" required />
                    <label>Name</label> 
                  </div>
                </div>
                <div>
                  <div>
                    <input type="text" required />
                    <label>Email</label> 
                  </div>
                </div>
                <div>
                  <div>
                    <input type="text" required />
                    <label>Phone Number</label> 
                  </div>
                </div>
                <div>
                  <div>
                    <textarea required></textarea>
                    <label>Message</label>
                  </div>
                </div>
              <div>
                <div>Send Message</div>
              </div>
          </div>
        </div>

    </div>
    </>
  )
}

export default Contact