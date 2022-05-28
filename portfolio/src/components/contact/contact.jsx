import React, { useState } from "react";
import int from './int.png';
import "./contact.scss"

export default function Contact() {
    const [message, setMessage] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src={int} alt="" />
            </div>
            <div className="right">

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="First Name " id="firstName" required />
                    <input type="text" placeholder="Last Name" id="lastName" required />
                    <input type="text" placeholder="Email" id="Email" required />
                    <textarea placeholder="Message" id="Message" required></textarea>
                    <button type="submit"> Send</button>
                    {message && <span>Thank you for your Email!</span>}
                </form>
            </div>

        </div>
    );
};





