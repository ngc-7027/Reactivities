import React from 'react';

interface Props {
    openForm: () => void;
}

function NavBar({openForm}: Props) {
    return (
        <div className="ui inverted menu fixed">
            <div className="item">
                <img src="./assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                Reactivities
                </div>
            <a className="item">Activities</a>
            <a className="item"><button onClick={openForm} className="ui green button">Create Activity</button></a>
        </div>
    )
}

export default NavBar;