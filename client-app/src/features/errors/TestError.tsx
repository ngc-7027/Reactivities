import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function TestErrors() {
    const baseUrl = 'http://localhost:5000/api/';

    function handleNotFound() {
        axios.get(baseUrl + 'buggy/not-found').catch(err => console.log(err.response));
    }

    function handleBadRequest() {
        axios.get(baseUrl + 'buggy/bad-request').catch(err => console.log(err.response));
    }

    function handleServerError() {
        axios.get(baseUrl + 'buggy/server-error').catch(err => console.log(err.response));
    }

    function handleUnauthorised() {
        axios.get(baseUrl + 'buggy/unauthorised').catch(err => console.log(err.response));
    }

    function handleBadGuid() {
        axios.get(baseUrl + 'activities/notaguid').catch(err => console.log(err.response));
    }

    function handleValidationError() {
        axios.post(baseUrl + 'activities', {}).catch(err => console.log(err));
    }

    return (
        <>
            <h1 className='header'>Test Error component</h1>
            <div className="ui grid">
                <div className="ui column width seven">
                    <button className="ui button primary" onClick={handleNotFound}>Not Found</button>
                    <button className="ui button primary" onClick={handleBadRequest}>Bad Request</button>
                    <button className="ui button primary" onClick={handleValidationError}>Validation Error</button>
                    <button className="ui button primary" onClick={handleServerError}>Server Error</button>
                    <button className="ui button primary" onClick={handleUnauthorised}>Unauthorised</button>
                    <button className="ui button primary" onClick={handleBadGuid}>Bad Guid</button>
                </div>
            </div>
        </>
    )
}
