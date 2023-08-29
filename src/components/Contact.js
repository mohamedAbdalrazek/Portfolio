import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact(props) {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <div className="row">
                <div className="col-6 left">
                    <h2>Let's collaborate!</h2>
                    <p>
                        I'm excited to hear about your project ideas and discuss
                        how we can bring them to life. Feel free to reach out,
                        and let's create something amazing together!
                    </p>
                    <h3>Email:</h3>
                    <p>mohamedbadawy296@gmail.com</p>
                    <h3>Based On:</h3>
                    <p>Cairo, Egypt</p>
                    <div className="social">
                        <a
                            href="https://github.com/mohamedAbdalrazek"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mohamed-abdelrazek-342b57222/"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="mailto: mohamedbadawy296@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>
                <div className="col-6 right">
                    <form>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="email" name="email" placeholder="Your Email" />
                        <textarea placeholder="Messege"></textarea>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contact;
