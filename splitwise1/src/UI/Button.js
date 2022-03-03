import './Button.css';
import PropTypes from "prop-types";

const Button = (props) => {
    const { type, className, onClick, label } = props;
    return (
      <button type={type} className={className||'button'} onClick={onClick}>
        {label}
      </button>
    );
  };

  Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string,
  };
  Button.defaultProps = {
    type: "button",
    className: "button",
    onClick: () => {},
    label: "",
  };

  export default Button;