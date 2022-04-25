import React from 'react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <div className="reactivities-container">
        <Routes>
          <Route path='/' element={ <HomePage /> }></Route>
          <Route path='/activities' element={ <ActivityDashboard /> }></Route>
          <Route path='/activities/:id' element={ <ActivityDetails /> }></Route>
          {["/createActivity", "/manage/:id"].map((path, index) => 
          <Route path={path} element={<ActivityForm key={index} />} key={index}></Route>)}
        </Routes>
      </div>
    </>        
  );
}

export default observer(App);
