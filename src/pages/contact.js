import React from 'react';
import ContactForm from '../frontend/components/ContactForm/ContactForm';
import Footer from '../frontend/components/Footer/Footer';
import Navbar from '../frontend/components/Navbar/Navbar';

export default () => (
  <div className="contact-container">
    <Navbar />
    <div className="contact-form-container">
      <h2 className="contact-header">Let's Connect</h2>
      {/* <h5 className="email-header">
        Contact Me Directly At{' '}
        <a href="mailto:kimaleen.tran@gmail.com">kimaleen.tran@gmail.com</a>
      </h5> */}
      <ContactForm />
    </div>
    <Footer />
  </div>
);
