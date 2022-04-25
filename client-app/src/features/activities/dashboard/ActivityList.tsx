import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../../app/stores/store';

function ActivityList() {
    const { activityStore } = useStore();
    const { deleteActivity, activitiesByDate, loading } = activityStore;

    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <div className='ui placeholder segment'>
        <div className="ui divided items">
            { activitiesByDate.map(activity => (
                <div key={activity.id} className='ui item'>
                <div className="content">
                    <div className="ui header">{activity.title}</div>
                    <div className='ui meta'>{activity.date}</div>
                    <div className='ui description'>
                        <p>{activity.description}</p>
                        <p>{activity.city}</p>
                    </div>
                    <div className='ui extra'>
                        <Link to={`/activities/${ activity.id }`} className='ui right floated button blue'>View</Link>
                        <button 
                        name={activity.id}
                        onClick={(e) => handleActivityDelete(e, activity.id)} 
                        className={(loading && target === activity.id) ? 'loading ui right floated button red' : 'ui right floated button red'}>Delete</button>
                        <div className='ui label'>{activity.category}</div>
                    </div>
                    </ div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default observer(ActivityList);