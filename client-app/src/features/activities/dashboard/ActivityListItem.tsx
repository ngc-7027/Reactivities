import React from "react";
import { Link } from "react-router-dom";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity: Activity
}

function ActivityListItem({ activity }: Props) {
    return (
        <>
        <div className="ui segments">
        <div className="ui segment">
            <div className="ui items">
                <div className="ui item">
                    <div className="ui tiny image circular"><img src='/assets/user.png' /></div>
                    <div className="content">
                        <Link className="ui header" to={`/activities/${activity.id}`}>
                            {activity.title}
                        </Link>
                        <div className='ui description'>Hosted by Bob</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ui segment">
            <span>
                <span><i className='icon clock'></i>{activity.date}</span>
                <span><i className='ui icon marker'></i>{activity.venue}</span>
            </span>
        </div>
        <div className="ui segment secondary">
            Attendees go here
        </div>
        <div className="ui clearing segment">
            <span>{activity.description}</span>
            <Link className="ui right floated button teal" to={`/activities/${activity.id}`} >View</Link>
        </div>
    </div>
    </>
    )
}

export default ActivityListItem;