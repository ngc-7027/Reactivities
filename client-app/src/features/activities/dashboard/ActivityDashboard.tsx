import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../app/stores/store';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

function ActivityDashboard () {
    const { activityStore } = useStore();
    const { selectedActivity, editMode } = activityStore;

    return (
        <div className="ui grid">
            <div className="ten wide column">
                <ActivityList />
            </div>
            <div className='six wide column'>
                {selectedActivity && !editMode &&
                <ActivityDetails />}
                {editMode &&
                <ActivityForm />
                }
            </div>
        </div>
    )
}

export default observer(ActivityDashboard);