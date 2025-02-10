const ContactCard = (theme) => {
    return (
        <div className={`parentDiv ${theme} contactCard`} id="contactDiv">
          <h2>Contact The Illustrious Charles</h2>
          <p>
          Email me at hello@contactCharles.com . I'd give you my number but I really hate talking on the phone. Here's my linkedin and github instead. :)
          </p>
        </div>
    )
}

export default ContactCard;