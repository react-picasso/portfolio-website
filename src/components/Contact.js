import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <article className="contact">
            <section>
                <h2 className="title-font blue-text">Contact Me</h2>
                <p className="white-text">If you are interested to hire me I am always open to new opportunities and interesting projects! Feel free to contact me if you have any other requests or questions regarding web development.</p>
            </section>
            <section>
                <ContactForm />
            </section>
        </article>
    );
};

export default Contact;