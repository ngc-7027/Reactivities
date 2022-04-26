import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="ui inverted menu fixed">
            <Link to='/' className="item">
                <img src="./assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                Reactivities
            </Link>
            <NavLink to="/activities" className="item">Activities</NavLink>
            <NavLink to="/testerrors" className="item">Errors Tests</NavLink>
            <div className="item disabled"><Link to='/createActivity'><button className="ui green button">Create Activity</button></Link></div>
        </div>
    )
}

export default NavBar;