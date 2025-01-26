import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true);
    }
  }, []);

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Feel free to reach out through the contact form or find our contact information below. 
          Your feedback, questions, and suggestions are important to us as we strive to provide 
          exceptional service to our university community.
        </p>
        <ul>
          <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
          <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
          <li>
            <img src={location_icon} alt="" />
            77 Massachusetts Ave, Cambridge<br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        {/* Add data-netlify="true" and a hidden input for form-name */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/?success=true&netlify-debug=true" // Add success and debug parameters
        >
          <input type="hidden" name="form-name" value="contact" />
          <label>Your name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" required />
          <label>Write your messages here</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        {success && <span>Thank you for your message! We'll get back to you soon.</span>}
      </div>
    </div>
  );
};

export default Contact;