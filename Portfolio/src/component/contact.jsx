
const Contact = () => {
    return (
        <section id="contact" className="contact-page">
            <div className="contact-header">
                <h2>Get in Touch</h2>
                <p>I'd love to hear from you! Whether you have a question or just want to say hello, feel free to reach out.</p>
            </div>
            <div className="contact-content">
                <div className="contact-form">
                    <h3>Contact Form</h3>
                    <form action="#" method="post">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                        
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                        
                        <label htmlFor="subject">Subject:</label>
                        <input type="text" id="subject" name="subject" placeholder="Subject" required />
                        
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="6" placeholder="Your Message" required></textarea>
                        
                        <button type="submit">Send Message</button>
                    </form>
                </div>
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p><strong>Email:</strong> dcr221003@gmail.com</p>
                    <p><strong>Phone:</strong> +91 7708681072</p>
                    <p><strong>Address:</strong> Coimbatore, India</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
