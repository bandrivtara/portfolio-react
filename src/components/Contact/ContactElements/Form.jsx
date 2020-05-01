import React from 'react';

const Form = () => {
    return (
        <div className="contact__form centered">
            <form className="form" action="https://formspree.io/moqwdgwl" method="POST">
                <h3>Or send me a message...</h3>
                <input type="text" name="name" placeholder="name" required /><br />
                <input type="email" name="e-mail" placeholder="e-mail" required /><br />
                <input type="text" name="message" placeholder="topic" required /><br />
                <textarea className="massage" name="text" placeholder="message"></textarea>
                <div className="button">
                    <button type="submit" className="btn-color"><h3>Send</h3></button>
                    <img className="airplane" src="images/airplane.png" alt="" />
                </div>
            </form>
        </div>
    )
}

export default Form;