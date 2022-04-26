import React from "react";
import { Link } from "react-router-dom";

interface Props {
    message: string;
}

function ValidationErrors({message}: Props) {
    return (
        <div className="ui segment">
            <h1 className="ui header">
                <i className="ui icon search" />
                {message}
            </h1>
            <div className="ui segment inline">
                <Link className="ui button brimary" to="/activities">Return to activities page.</Link>
            </div>
        </div>
    )
}

export default ValidationErrors;