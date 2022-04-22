import React from 'react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

function ActivityList({activities, selectActivity, deleteActivity}: Props) {
    return (
        <div className='ui placeholder segment'>
        <div className="ui divided items">
            { activities.map(activity => (
                <div key={activity.id} className='ui item'>
                <div className="content">
                    <div className="ui header">{activity.title}</div>
                    <div className='ui meta'>{activity.date}</div>
                    <div className='ui description'>
                        <p>{activity.description}</p>
                        <p>{activity.city}</p>
                    </div>
                    <div className='ui extra'>
                        <button onClick={() => selectActivity(activity.id)} className='ui right floated button blue'>View</button>
                        <button onClick={() => deleteActivity(activity.id)} className='ui right floated button red'>Delete</button>
                        <div className='ui label'>{activity.category}</div>
                    </div>
                    </ div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ActivityList;