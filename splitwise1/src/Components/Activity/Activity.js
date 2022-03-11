
import ActivityItem from "./ActivityItem";
import PropTypes from 'prop-types';

const Activity = (props)=>{


    let allNames={};
    let total = 0;
    props.userNames.map((user)=>{
        // console.log(user);
        return allNames[user]=0;
    })

    props.userTxnList.map((txn)=>{
        // console.log(txn.amount);
        total+=Number(txn.amount);
        if (txn.user in allNames) {
            allNames[txn.user]+=Number(txn.amount)
        }
        else {
            allNames[txn.user] = Number(txn.amount);
        }
    })

    console.log(allNames,total);
    let peruser = total/props.userNames.length;
    console.log(peruser);

    // const [updatedActivityList , setActivity] = useState([]);
    let activityList= [];


    function splitPayments(payments) {
        const people = Object.keys(payments);
      
        const sortedPeople = people.sort((personA, personB) => payments[personA] - payments[personB]); //r u v r
        const sortedValuesPaid = sortedPeople.map((person) => payments[person] - peruser); //rah v ut ris
      
        let i = 0;
        let j = sortedPeople.length - 1;
        let debt;

        while (i < j) {
          debt = Math.min(-(sortedValuesPaid[i]), sortedValuesPaid[j]);
          sortedValuesPaid[i] += debt;
          sortedValuesPaid[j] -= debt;
      
          console.log(`${sortedPeople[i]} owes ${sortedPeople[j]} ${debt}`);
          activityList.push(`${sortedPeople[i]} owes ${sortedPeople[j]} ${debt}`);
      
          if (sortedValuesPaid[i] === 0) {
            i++;
          }
      
          if (sortedValuesPaid[j] === 0) {
            j--;
          }
        }
      }
      if(props.userTxnList.length!==0)
      splitPayments(allNames);

    return(
    <div className="activity-container">
        <h2>Activity</h2>
        {activityList.map((activity)=>{
            return(
             <ActivityItem key = {Math.floor(Math.random()*100)} activityitem = {activity}/>
            )
        })}
    </div>
    );

}

Activity.propTypes = {
  userNames: PropTypes.array,
  userTxnList: PropTypes.array,
};
Activity.defaultProps = {
  userNames: [],
  userTxnList: [],
};

export default Activity;