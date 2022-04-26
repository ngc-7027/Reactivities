import React from 'react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import { ToastContainer } from 'react-toastify';
import TestErrors from '../../features/errors/TestError';
import ValidationErrors from '../../features/errors/ValidationErrors';

function App() {
  const location = useLocation();

  return (
    <>
    <ToastContainer hideProgressBar />
    <Routes>
    <Route path='/' element={ <HomePage /> }></Route>
      </Routes>
      <NavBar />
      <div className="reactivities-container">
        <Routes>
          <Route path='/activities' element={ <ActivityDashboard /> }></Route>
          <Route path='/activities/:id' element={ <ActivityDetails /> }></Route>
          {["/createActivity", "/manage/:id"].map((path, index) => 
          <Route path={path} element={ <ActivityForm key={index} />}></Route>)}
          <Route path='/error400' element={ <ValidationErrors message="Error: 400 Bad Request." /> }></Route>
          <Route path='/error401' element={ <ValidationErrors message="Error: 401 Unauthorised." /> }></Route>
          <Route path='/error403' element={ <ValidationErrors message="Error: 403 Forbidden." /> }></Route>
          <Route path='/error500' element={ <ValidationErrors message="Error: 500 Unexpected Error." /> }></Route>
          <Route path='*' element={ <ValidationErrors message="Error: 404 Page Not Found." /> }></Route>
          <Route path='/testerrors' element={<TestErrors /> }></Route>
        </Routes>
      </div>
    </>        
  );
}

export default observer(App);
