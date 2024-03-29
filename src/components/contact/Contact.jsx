import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState, useContext } from "react";
import { ThemeContext } from "../../context";

import emailjs from "emailjs-com";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_lvcvni7', 'template_bgm59tu', formRef.current, 'user_VKyG8yll4kLn45ch29NqL')
        .then((result) => {
          console.log(result.text);
          setDone(true)
        }, (error) => {
          console.log(error.text);
      });
    };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's chat
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon"/>
                            +1 925 918 2730
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon"/>
                            njskinner@ucdavis.edu
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon"/>
                            Pleasanton, CA 94588
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch, I'm always looking for new and exciting opportunities.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you for your interest!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;