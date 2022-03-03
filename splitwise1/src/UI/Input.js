import './Input.css';
import PropTypes from "prop-types";

const Input = (props)=>{
    const {type, value ,placeholder, onChange} = props;
    return(
        <input className = 'inputline' type={type} value ={value} placeholder={placeholder} onChange={onChange}/>
    );
}

Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};
Input.defaultProps = {
    type: "text",
    value: "",
    placeholder: "",
    onChange: () => {},
};
export default Input;