import "./ActivityItem.css"
import PropTypes from 'prop-types';

const ActivityItem = (props)=>{
    return(
    <div className="act-item">
        {props.activityitem}
    </div>
    )
}

ActivityItem.propTypes = {
    activityitem: PropTypes.string,
};
ActivityItem.defaultProps = {
    activityitem: "",
};

export default ActivityItem;