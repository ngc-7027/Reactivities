import React from 'react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, openForm, cancelSelectedActivity } = activityStore;

    if (!activity) return <LoadingComponent />;

    return (
        <div className="ui card fluid">
        <div className="image">
            <img src={`/assets/categoryImages/${activity.category}.jpg`} />
        </div>
        <div className="content">
            <a className="header">{activity.title}</a>
            <div className="meta">
            <span className="date">{activity.date}</span>
            </div>
            <div className="description">
            {activity.description}
            </div>
        </div>
        <div className="extra content">
            <div className="ui buttons two">
            <button onClick={() => openForm(activity.id)} className="ui attached button basic blue">Edit</button>
            <button onClick={cancelSelectedActivity} className="ui attached button basic gray">Cancel</button>
            </div>
        </div>
        </div>
    )
}

export default ActivityDetails;