

export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="contact-row">
        <button className="nav-button project-button">
          Contact
        </button>
        <div className="">
          <textarea placeholder="Tell me about your project!" rows={16} cols={100} />
        </div>
      </div>
    </section>
  );
}
