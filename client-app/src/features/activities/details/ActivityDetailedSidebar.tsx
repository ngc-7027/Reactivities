import React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

function ActivityDetailedSidebar () {
    return (
        <>
            <div className="ui segment attached top secondary inverted teal center aligned" style={{ border: 'none' }}>
                3 People Going
            </div>
            <div className="ui segment attached">
                <div className="ui list relaxed divided">
                    <div className="item" style={{ position: 'relative' }}>
                        <div className="ui orange right ribbon label" style={{ position: 'absolute' }}>
                            Host
                        </div>
                        <img className="ui image tiny" src={'/assets/user.png'} />
                        <div className="ui content">
                            <h3 className="ui header">
                                <Link to={`#`}>Bob</Link>
                            </h3>
                            <div className="extra" style={{ color: 'orange' }}>Following</div>
                        </div>
                    </div>

                    <div className="item" style={{ position: 'relative' }}>
                        <img className="ui image tiny" src={'/assets/user.png'} />
                        <div className="ui content">
                            <h3 className="ui header">
                                <Link to={`#`}>Tom</Link>
                            </h3>
                            <div className="extra" style={{ color: 'orange' }}>Following</div>
                        </div>
                    </div>

                    <div className="item" style={{ position: 'relative' }}>
                        <img className="ui image tiny" src={'/assets/user.png'} />
                        <div className="ui content">
                            <h3 className="ui header">
                                <Link to={`#`}>Sally</Link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}


export default observer(ActivityDetailedSidebar);