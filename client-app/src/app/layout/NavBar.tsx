import React from 'react';
import { useStore } from '../stores/store';

function NavBar() {
    const { activityStore } = useStore();

    return (
        <div className="ui inverted menu fixed">
            <div className="item">
                <img src="./assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                Reactivities
                </div>
            <a className="item">Activities</a>
            <a className="item"><button onClick={ () => activityStore.openForm() } className="ui green button">Create Activity</button></a>
        </div>
    )
}

export default NavBar;