import React , {useState} from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import './AddUserForm.css';
import PropTypes from 'prop-types';

const AddUserForm = (props)=>{

    const[enteredUsername,setUsername]=useState("");

    const onChangeHandler = (event)=>{
        setUsername(event.target.value);   
    }

    const submitHandler = (event)=>{ 
        props.onSaveUser(enteredUsername);
        props.onSubmit(false);
    }
    const cancelHandler = (event)=>{ 
        props.onSubmit(false);
    }

    return(
        <div>
            <Input type='text' value ={enteredUsername} placeholder = "User name" onChange= {onChangeHandler}/>
            <div className="submitbuttom">
            <Button type="button" className = "button"  onClick = {submitHandler} label="Submit"/>
            <Button type="button" className = "button"  onClick = {cancelHandler} label="Cancel"/>
            </div>
        </div>
    );
}

AddUserForm.propTypes = {
    onSubmit: PropTypes.func,
    onSaveUser:PropTypes.func
};
AddUserForm.defaultProps = {
    onSubmit: () => {},
    onSaveUser: () => {},
};

export default AddUserForm;

