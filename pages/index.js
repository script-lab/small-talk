import React, { useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from './reducers/events'
import Events from './components/Events'
import EventForm from './components/EventForm'


const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch}></EventForm>
        <Events state={state} dispatch={dispatch}></Events>
      </div>
    </>
  );
}


export default App