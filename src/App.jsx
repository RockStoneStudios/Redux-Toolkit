import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {useDispatch,useSelector} from 'react-redux'
import TaskList from './components/TaskList';
import TaskFomr from './components/TaskForm';
import {BrowserRouter as Router, Routes , Route} from'react-router-dom';

function App() {

  const taskState =  useSelector(state => state.tasks);
  console.log(taskState);
  return (
    <div className='bg-zinc-900 h-screen text-white'>
       <div className="flex items-center justify-center h-full"> 
       <Router>
        <Routes>
          <Route path='/' element = {<TaskList/>}/>
          <Route path='/create-task' element= {<TaskFomr/>}/>
          <Route path='/edit-task/:id' element= {<TaskFomr/>}/>
        </Routes>
      </Router>
       </div>
    </div>
  )
}

export default App
