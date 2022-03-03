import TransactionItem from "./TransactionItem";
import './TransactionList.css';
import PropTypes from "prop-types";

function TransactionList(props){
    
    if(props.userTxnList.length === 0)
    return <h2>Found no expenses.</h2>;
    
    console.log(props.userTxnList);
    return (
      <ul>
        {props.userTxnList.map((txn) => (
          <TransactionItem
            key={txn.id}
            date={txn.date}
            description={txn.description}
            amount={txn.amount}
            user={txn.user}
          />
        ))}
      </ul>
    );  
}

TransactionList.propTypes = {
  userTxnList:PropTypes.array
}
TransactionList.defaultProps={
  userTxnList:[]
}

export default TransactionList;