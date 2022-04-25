import { observer } from 'mobx-react-lite';
import React from 'react'
import {Activity} from "../../../app/models/activity";

const activityImageStyle = {
    filter: 'brightness(30%)'
};

const activityImageTextStyle = {
    position: 'absolute' as 'absolute',
    bottom: '5%',
    left: '5%',
    right: '5%',
    width: '90%',
    height: 'auto',
    color: 'white'
};

interface Props {
    activity: Activity
}

function ActivityDetailedHeader({activity}: Props) {
    return (
        <div className="ui segments">
            <div className="ui segment basic attached top" style={{padding: '0'}}>
                <img className="ui image fluid" style={activityImageStyle} src={`/assets/categoryImages/${activity.category}.jpg`}/>
                <div className="ui segment basic" style={activityImageTextStyle}>
                    <div className="ui items">
                        <div className="ui item">
                            <div className="ui content">
                                <h1 className="ui header" style={{color: 'white'}}>{activity.title}</h1>
                                <p>{activity.date}</p>
                                <p>Hosted by <strong>Bob</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ui segment clearing attached bottom">
                <button className="ui button teal">Join Activity</button>
                <button className="ui button">Cancel attendance</button>
                <button  className="ui right floated button orange">Manage Event</button>
            </div>
        </div>
    )
}

export default observer (ActivityDetailedHeader);