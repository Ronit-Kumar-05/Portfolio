import React from 'react'
import './Footer.css'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
                cursor="pointer"
              />
              <div>
                <span> Teledih Road Chas; </span>
                <span>Bokaro,Jharkhand</span>
              </div>
            </div>

            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: '#fff', marginRight: '2rem' }}
                  cursor="pointer"
                />
                {/* +91 8709124078 */}
              </h4>
            </div>

            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: '#fff', marginRight: '2rem' }}
                  cursor="pointer"
                />
                ronit26feb2002@gmail.com
              </h4>
            </div>
          </div>
          <div className="right">
            <h4>About The Company</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              aliquid animi nesciunt aperiam aspernatur pariatur doloribus
              sapiente ullam. Sint, modi.
            </p>
            <div className="social">
              <FaFacebook
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              <FaTwitter
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              <FaLinkedin
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
