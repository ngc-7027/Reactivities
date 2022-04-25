import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="ui segment inverted vertical masthead">
            <div className="masthead-container">
            <h1 className="ui header inverted">Welcome to reactivities</h1>
            <Link className="ui button inverted" to='/activities'>Take me to the activities"</Link>
            </div>
        </div>
    )
}

export default HomePage;