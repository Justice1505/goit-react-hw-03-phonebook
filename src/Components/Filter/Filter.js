import PropTypes from "prop-types";
import s from "./Filter.module.css";

export default function Filter({ value, onFilter }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" value={value} onChange={onFilter}></input>
    </label>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
