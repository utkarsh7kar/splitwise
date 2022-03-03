import React,{useState} from "react";
import Button from "../../UI/Button";
import AddUserForm from "./AddUserForm"
import './Header.css';
import PropTypes from "prop-types";

const Header = (props)=>{

    const[newUser, setUser] = useState(false);
    const AddNewUserHandler = ()=>{
        setUser(true);
    }

    const changeNewUser = (val)=>{
        setUser(val);
    }

    const updateUserName = (name)=>{
        props.onUpdateUser(name);
    }


    return(
      <div className="outer">
          <h1>Expense Tracker</h1>
          {!newUser && <Button type="button" classname="button" onClick={AddNewUserHandler} label="Add User"/>}
          {newUser && <AddUserForm onSubmit={changeNewUser} onSaveUser={updateUserName}/> }
      </div>
    );
}

Header.propTypes={
    onUpdateUser: PropTypes.func
};
Header.defaultProps={
    onUpdateUser : ()=>{}
}

export default Header;