import Button from "../../UI/Button";
import Input from "../../UI/Input";
import './TransactionForm.css'
import { useState } from "react";
import PropTypes from "prop-types";

const TransactionForm = (props)=>{
    
    const[txnAmount,setAmount]=useState("");
    const[txnDate, setDate]=useState("");
    const[txnDescription,setDescription]=useState("");
    const [user, setUser] = useState(props.user[0]);

    const onChangeDescriptionHandler = (event)=>{
        setDescription(event.target.value);
    }
    const onChangeDateHandler = (event)=>{
        setDate(event.target.value);
    }
    const onChangeAmountHandler = (event)=>{
        setAmount(event.target.value);
    }
    
    const onChangeSelectHandler = (event) => {
        setUser(event.target.value);
    };

    const submitHandler = (event)=>{
        if((txnAmount!=='' && txnAmount!=='0') && txnDate!=='' && txnDescription!==''){
        const newTxn = {
            id: user+txnAmount,
            amount: txnAmount,
            date: txnDate,
            description: txnDescription,
            user: user
        }
        props.onSaveTxn(newTxn);
        props.onSubmit(false);
    }
    }
    const cancelHandler = (event)=>{
        props.onSubmit(false);
    }

    return(
        <div className="txnform-container">
            <div className="txninput">
            <Input type="text" value ={txnDescription} placeholder = "Txn Description" onChange= {onChangeDescriptionHandler}/>
            <Input type="date" value ={txnDate} placeholder = "Txn Date" onChange= {onChangeDateHandler}/>
            <Input type="number" value ={txnAmount.toString()} placeholder = "Txn Amount" onChange= {onChangeAmountHandler}/>
            <select className="userselect" value={user} onChange={onChangeSelectHandler}>
            {props.user.map((option,index) => (
                <option key={option} index={index} value={option}>{option}</option>
            ))}
          
            </select>
            </div>
            <div className="submittxn">
            <Button type="button" className = "button"  onClick = {submitHandler} label="Submit"/>
            <Button type="button" className = "button"  onClick = {cancelHandler} label="Cancel"/>
            </div>
        </div>
    );
}

TransactionForm.propTypes = {
    user: PropTypes.array,
    onSaveTxn: PropTypes.func,
    onSubmit:PropTypes.func
}
TransactionForm.defaultProps={
    user:[],
    onSaveTxn : ()=>{},
    onSubmit : ()=>{},
}

export default TransactionForm;