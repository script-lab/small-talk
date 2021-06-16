import React, { useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppContext from './contexts/AppContext'
import reducer from './reducers'
import Events from './components/Events'
import EventForm from './components/EventForm'


const App = () => {

  const initialState = {
    events: [],
    operationLogs: []
  }

  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
        <EventForm></EventForm>
        <Events></Events>
      </div>
    </AppContext.Provider>
  );
}


export default App