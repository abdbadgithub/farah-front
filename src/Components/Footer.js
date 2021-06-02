import React from "react"
import phone from '../images/phone.svg'
import map from '../images/map.svg'
import mailbox from '../images/mailbox.svg'
import './styles/Footer.css'

function Footer() {
  return (

    <footer className="footer col-lg-10 col-xl-12 " id="Footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mr-auto">
            <h2>Contact Us</h2>
            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quaerat autem corrupti asperiores accusantium et fuga! Facere excepturi, quo eos, nobis doloremque dolor labore expedita illum iusto, aut repellat fuga!</p>

            <ul className="list-unstyled pl-md-5 mb-5">
              <li className="d-flex text-black mb-2">
                <span className="mr-3"><span> <img src={map} width="30px" height="35px" alt="phone" /></span></span>  <br /> United States
            </li>
              <li className="d-flex text-black mb-2"><span className="mr-3"><img src={phone} width="30px" height="35px" alt="phone" /></span> +1 (222) 345 6789</li>
              <li className="d-flex text-black"><span className="mr-3"><img src={mailbox} width="30px" height="35px" alt="phone" /></span> info@mywebsite.com </li>
            </ul>
            <br />
            <br />
            <br />
          </div>
          <div className="col-md-6">
            <form className="mb-5" method="post" id="contactForm" name="contactForm">
              <div className="row">

                <div className="col-md-10 form-group">
                  <label htmlFor="name" className="col-form-label">Name</label><br />
                  <input type="text" placeholder="Enter your name" className="col-md-12" name="name" id="name" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-10 form-group">
                  <label htmlFor="email" className="col-form-label">Email</label><br />
                  <input type="text" placeholder="Enter your email" className="col-md-12" name="email" id="email" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-10 form-group">
                  <label htmlFor="message" className="col-form-label">Message</label><br />
                  <textarea className="col-md-12" placeholder="Enter your message" name="message" id="message" cols="30" rows="7"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10">
                  <input type="submit" value="Send Message" className=" rounded-4 py-2 px-4" />
                  <span className="submitting"></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer