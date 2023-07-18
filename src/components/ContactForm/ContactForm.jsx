import React from "react";
import styles from "./ContactForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { postContactOperation } from "../../redux/operations";
import { selectContacts } from "../../redux/selectors";

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const formSubmit = (event) => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    const newContact = { name, number };
    contacts.some((contact) => name === contact.name)
      ? alert(`${name} is already in contacts.`)
      : dispatch(postContactOperation(newContact));
    event.currentTarget.elements.name.value = "";
    event.currentTarget.elements.name.number = "";
  };

  return (
    <form className={styles.form} onSubmit={formSubmit}>
      <label className={styles.label}>
        <span className={styles.labelText}></span>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="imię"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.label}>
        <span className={styles.labelText}></span>
        <input
          className={styles.input}
          type="tel"
          name="number"
          placeholder="numer telefonu"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={styles.btn} type="submit">
        Dodaj kontakt
      </button>
    </form>
  );
};

export default ContactForm;
