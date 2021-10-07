import React, { Component } from "react";
import shortid from "shortid";
import s from "./ContactForm.module.css";
import PropTypes from "prop-types";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameRandomId = shortid.generate();
  numberRandomId = shortid.generate();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={s.form}>
          <label className={s.label} htmlFor={this.nameRandomId}>
            Name:
            <input
              onChange={this.handleChange}
              value={this.state.name}
              className={s.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label htmlFor={this.numberRandomId} className={s.label}>
            Number:
            <input
              className="{ }"
              value={this.state.number}
              id={this.numberRandomId}
              onChange={this.handleChange}
              name="number"
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button type="submit" className={s.btn}>
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
