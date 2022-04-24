import React, { useEffect } from 'react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  if (activityStore.loadingInitial) return (<LoadingComponent content='Loading app...' />);

  return (
    <>
      <NavBar />
      <div className="reactivities-container">
        <ActivityDashboard  />
      </div>
    </>        
  );
}

export default observer(App);
