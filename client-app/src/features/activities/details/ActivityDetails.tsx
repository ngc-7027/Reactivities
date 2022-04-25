import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity]);

    if (loadingInitial || !activity) return <LoadingComponent />;

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
            <Link to={`/manage/${activity.id}`} className="ui attached button basic blue">Edit</Link>
            <Link to='/activities' className="ui attached button basic gray">Cancel</Link>
            </div>
        </div>
        </div>
    )
}

export default observer(ActivityDetails);