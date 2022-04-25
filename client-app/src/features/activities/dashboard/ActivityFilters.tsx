import React from "react";
import Calendar from 'react-calendar'

function ActivityFilters() {
    return (
        <>
        <div className="ui menu vertical" style={{ width: '100%', marginTop: '3em' }}>
            <h3 className="ui header item">
                <i className="ui icone filter attached teal"></i>
                <div className="content">
                    Filters
                </div>
            </h3>
            <a className="item">All Activities</a>
            <a className="item">I'm going</a>
            <a className="item">I'm hosting</a>
        </div>
        <h1 className="header"></h1>
        <Calendar />
        </>
    )
}

export default ActivityFilters;