import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

interface Props {
    key: number
}

function ActivityForm({ key }: Props) {
    const { activityStore } = useStore();
    const { createActivity, updateActivity, loading, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams();
    let navigate = useNavigate();

    const [activity, setActivity] = useState({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!));
    }, [id, loadActivity, key])

    function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        if (activity.id.length === 0) {
            const newActivity = {
                ...activity,
                id: uuid()
            };
            createActivity(newActivity).then(() => navigate(`/activities/${newActivity.id}`));
        } else {
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`));
        };
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value});
    }

    if (loadingInitial) return <LoadingComponent content='Loading activity...' />

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
                <Link to='/activities' className="ui button floated right" type="submit">Cancel</Link>
                <button className={loading ? 'loading ui button floated right green' : 'ui button floated right green'} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default observer(ActivityForm);