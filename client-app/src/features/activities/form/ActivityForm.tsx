import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { useStore } from '../../../app/stores/store';

function ActivityForm() {
    const { activityStore } = useStore();
    const { closeForm, selectedActivity, createActivity, updateActivity, loading } = activityStore;

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
        activity.id ? updateActivity(activity) : createActivity(activity);
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
                    <input type="date" placeholder="Date" value={activity.date} name="date" onChange={handleInputChange} />
                </div>
                <div className="field">
                    <input type="text" placeholder="City" value={activity.city} name="city" onChange={handleInputChange} />
                </div>
                <div className="field">
                    <input type="text" placeholder="Venue" value={activity.venue} name="venue" onChange={handleInputChange} />
                </div>
                <button onClick={closeForm} className="ui button floated right" type="submit">Cancel</button>
                <button className={loading ? 'loading ui button floated right green' : 'ui button floated right green'} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default observer(ActivityForm);