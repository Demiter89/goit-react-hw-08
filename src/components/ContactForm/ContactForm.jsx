const ContactForm = () => {
  return (
    <form>
      <input type="text" placeholder="Name" />
      <input type="tel" placeholder="Number" />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;