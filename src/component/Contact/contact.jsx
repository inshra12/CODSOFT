import React,{useRef} from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form =useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_l79ecw9','template_nwagr7j',form.current,'1wVnzaRFca2P0lm3c')
    .then((result)=>{
      console.log(result.text);
      e.target.reset();
      alert('Email Sent!');

    },(error)=>{
      console.log(error.text);
    });
  };
  return (
    <section className="contact">
      <span className="contact-title">Contact Me</span>
      <form className="contactform" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Enter Name" name="from_name" />
        <input type="text" className="email" placeholder="Enter Email" name="your_email" />
        <textarea
        
          name="message"
          id=""
          cols="30"
          rows="10"
          className="msg"
          placeholder="Enter Message"
        ></textarea>
        <button className="submitbtn" value='send'>Submit</button>
      </form>
    </section>
  );
};

export default Contact;
