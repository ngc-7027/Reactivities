import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import ActivityFilters from './ActivityFilters';
import ActivityList from './ActivityList';

function ActivityDashboard () {
    const { activityStore } = useStore();
    const { loadActivities, activityRegistry } = activityStore;

    useEffect(() => {
      if (activityRegistry.size <= 1) loadActivities();
    }, [activityRegistry.size, loadActivities])
  
    if (activityStore.loadingInitial) return (<LoadingComponent content='Loading app...' />);
  

    return (
        <div className="ui grid">
            <div className="ten wide column">
                <ActivityList />
            </div>
            <div className='six wide column'>
                <ActivityFilters />
            </div>
        </div>
    )
}

export default observer(ActivityDashboard);