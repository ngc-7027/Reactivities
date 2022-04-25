import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../app/stores/store';
import ActivityListItem from './ActivityListItem';

function ActivityList() {
    const { activityStore } = useStore();
    const { groupedActivities } = activityStore;

    return (
        <>
        {groupedActivities.map(([group, activities]) => (
            <div className='ui basic segment' key={group}>
                <div className='ui header sub teal'>
                    {group}
                </div>
                <div className='ui placeholder segment'>
                    <div className="ui divided items">
                        { activities.map(activity => (
                            <ActivityListItem key={ activity.id } activity = { activity } />
                        ))}
                    </div>
                </div>
            </div>
        ))}


        
</>
    )
}

export default observer(ActivityList);