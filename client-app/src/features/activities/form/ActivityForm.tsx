import React, { ChangeEvent, useState } from 'react';
import { Activity } from '../../../app/models/activity';

interface Props {
    closeForm: () => void;
    activity: Activity | undefined;
    createOrEdit: (activity: Activity) => void;
}

function ActivityForm({closeForm, activity: selectedActivity, createOrEdit}: Props) {

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value});
    }

    return (
        <div className="ui segment clearing">
            <form onSubmit={handleSubmit} autoComplete='off' className="ui form">
                <div className="field">
                    <input type="text" placeholder="Title" value={activity.title} name="title" onChange={handleInputChange} />
                </div>
                <div className="field">
                    <textarea placeholder="Description" value={activity.description} name="description" onChange={handleInputChange} ></textarea>
                </div>
                <div className="field">
                    <input type="text" placeholder="Category" value={activity.category} name="category" onChange={handleInputChange} />
                </div>
                <div className="field">
                    <input type="text" placeholder="Date" value={activity.date} name="date" onChange={handleInputChange} />
                </div>
                <div className="field">
                    <input type="text" placeholder="City" value={activity.city} name="city" onChange={handleInputChange} />
                </div>
                <div className="field">
                    <input type="text" placeholder="Venue" value={activity.venue} name="venue" onChange={handleInputChange} />
                </div>
                <button onClick={closeForm} className="ui button floated right" type="submit">Cancel</button>
                <button className="ui button floated right green" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ActivityForm;