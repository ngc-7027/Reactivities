import { observer } from 'mobx-react-lite'
import React from 'react'

function ActivityDetailedChat() {
    return (
        <>
            <div className="ui segment textAlign center attached top inverted teal" style={{border: 'none'}} >
                <h3 className="ui header">Comments</h3>
            </div>
            <div className="ui segment attached">
                <div className="ui comments">
                    <div className="comment">
                    <a className="avatar">
                        <img src='/assets/user.png' />
                    </a>
                        <div className="content">
                            <a className="author">Matt</a>
                            <div className="metadata">
                                <div className="date">Today at 5:42PM</div>
                            </div>
                            <div className="text">How artistic!</div>
                            <div className="actions">
                                <div className="reply">Reply</div>
                            </div>
                        </div>
                    </div>

                    <div className="comment">
                        <a className="avatar">
                            <img src='/assets/user.png' />
                        </a>
                        <div className="content">
                            <a className="author">Joe Henderson</a>
                            <div className="metadata">
                                <div>5 days ago</div>
                            </div>
                            <div className="text">Dude, this is awesome. Thanks so much</div>
                            <div className="actions">
                                <div className="reply">Reply</div>
                            </div>
                        </div>
                    </div>

                    <form className="ui reply form">
                        <div className="field">
                            <textarea></textarea>
                        </div>
                        <div className="ui primary labeled submit icon button">
                            <i className="icon edit"></i> Add Reply
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default observer(ActivityDetailedChat);