import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedSidebar from './ActivityDetailedSidebar';

function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity]);

    if (loadingInitial || !activity) return <LoadingComponent />;

    return (
        <div className="ui grid">
            <div className="ten wide column">
                <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedChat />
                <ActivityDetailedInfo activity={activity} />
            </div>
            <div className='six wide column'>
                <ActivityDetailedSidebar />
            </div>
        </div>
    )
}

export default observer(ActivityDetails);