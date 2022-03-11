import "./App.css";
import Header from "./Components/HeaderSection/Header";
import React, { useState } from "react";
import Transaction from "./Components/Transaction/Transactions";
import Activity from "./Components/Activity/Activity";

function App() {
  //For storage and display of users
  
  let userList, txnList;
  try {
    userList = JSON.parse(localStorage.getItem("userName"));
    if (userList == null) userList = [];
  } catch (error) {
    console.log(error);
  }
  const [updatedList, setUserList] = useState(userList);

  console.log(updatedList);

  const userAddHandler = (name) => {
    setUserList((prev) => {
      localStorage.setItem("userName", JSON.stringify([name, ...prev]));
      return [name, ...prev];
    });
  };

  //For the txn storage and display

  try {
    txnList = JSON.parse(localStorage.getItem("txn"));
    if (txnList == null) txnList = [];
  } catch (error) {
    console.log(error);
  }
  const [updatedTxnList, setTxnList] = useState(txnList);

  console.log(updatedTxnList);

  const addTxnHandler = (txnData) => {
    setTxnList((prev) => {
      localStorage.setItem("txn", JSON.stringify([txnData, ...prev]));
      return [txnData, ...prev];
    });
  };

  return (
    <div className="App">
      <div className="header-container">
        <Header onUpdateUser={userAddHandler}  />
      </div>

     <div className="container">
        <div className="txn-container">
          <Transaction
          onAddTxn={addTxnHandler}
          user={updatedList}
          userTxnList={updatedTxnList}
        /></div>
        <div className="act-container"><Activity userTxnList={updatedTxnList} userNames={updatedList}></Activity>
        </div>
      </div>
    </div>
     
    
  );
}

export default App;
