import PropTypes from "prop-types";

import s from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <span className={s.span}>{name}: </span>
          <span className={s.span}>{number}</span>
          <button onClick={() => onDelete(id)} className={s.btn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
