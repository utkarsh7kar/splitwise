import "./TransactionItem.css";
import PropTypes from "prop-types";

function TransactionItem(props) {
  return (
   <li> 
        <div className="txn-item">
            <h2>{props.description}</h2>
            <div >{props.user}</div>
            <div>{props.date}</div>
            <div className="txn-item__price">Rs.{props.amount}</div>
        </div>
    </li>
  
  );
}

TransactionItem.propTypes = {
  description:PropTypes.string,
  user:PropTypes.string,
  date:PropTypes.string,
  amount:PropTypes.string
}
TransactionItem.defaultProps={
  description:"",
  user:"",
  date:"",
  amount:"",
}

export default TransactionItem;
