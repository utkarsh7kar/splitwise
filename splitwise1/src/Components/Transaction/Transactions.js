import React, { useState } from "react";
// import Button from "../../UI/Button";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import './Transactions.css';
import PropTypes from 'prop-types';

const Transaction = (props) => {
  const [newTxn, setTxn] = useState(false);
  // const AddNewTransactionHandler = () => {
  //   setTxn(true);
  // };

  

  const addNewTxn = (val) => {
    setTxn(val);
  };

  const addTxnHandler = (newTxn) => {
    props.onAddTxn(newTxn);
  };



  return (
    <div className="transaction-container">
      {props.user.length===0 && <p>No User Added!!</p>}
      {/* {!newTxn && props.user.length!==0 && (
        <Button
          type="button"
          className="addtxnbutton"
          onClick={AddNewTransactionHandler}
          label="Add Tx"
        />
      )} */}
      <h2 className="txnheader">Enter Transactions</h2>
   
      {!newTxn && props.user.length!==0 && (
        <TransactionForm
          user={props.user}
          onSaveTxn={addTxnHandler}
          onSubmit={addNewTxn}
        />
      )}
      <h2 className="txnheader">Past Transactions</h2>
      <TransactionList userTxnList={props.userTxnList} />
    </div>
  );
};

Transaction.propTypes = {
  onAddTxn: PropTypes.func,
  user: PropTypes.array,
  userTxnList:PropTypes.array
}
Transaction.defaultProps={
  onAddTxn : ()=>{},
  user:[],
  userTxnList:[]
}

export default Transaction;




// r - 200 -175 -150 r owe v
// u - 300 -75
// v - 400 0
// rah - 600 225 r owe 150 rah u owe 75 to rahul
// tot - 1500/4 - 375
