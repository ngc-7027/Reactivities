import { observer } from 'mobx-react-lite';
import React from 'react'
import {Activity} from "../../../app/models/activity";

interface Props {
    activity: Activity
}

function ActivityDetailedInfo({activity}: Props) {
    return (
        <div className="ui segments">
            <div className="ui segment attached top">
                <div className="ui grid">
                    <div className="one wide column">
                        <i className="ui icon info large teal" />
                    </div>
                    <div className="fifteen wide column">
                        <p>{activity.description}</p>
                    </div>
                </div>
            </div>
            <div className="ui segment attached">
                <div className="ui grid verticalAlign middle">
                    <div className="one wide column">
                        <i className="ui icon calendar large teal" />
                    </div>
                    <div className="fifteen wide column">
                        <span>{activity.date}</span>
                    </div>
                </div>
            </div>
            <div className="ui segment attached">
                <div className="ui grid verticalAlign middle">
                    <div className="one wide column">
                        <i className="ui icon marker large teal" />
                    </div>
                    <div className="fifteen wide column">
                        <span>{activity.venue}, {activity.city}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(ActivityDetailedInfo);