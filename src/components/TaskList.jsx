import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { deleteTask } from '../redux/Slices/taskSlice';
import {useNavigate, Link} from 'react-router-dom'
import './button.css';
const TaskList = () => {
    
    const tasks = useSelector(state=> state.tasks);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = id => {
      dispatch(deleteTask(id))
    }
  return (
  

    <div className='w-4/6'>
      <header className='flex justify-between items-baseline py-4'>
         <h1>Task List {tasks.length}</h1>
         <button className='buttonTask' onClick={()=>navigate('/create-task')}>Create Task</button>
      </header>
         <div className='grid grid-cols-3 gap-4'>
          {tasks.map(task =>(
              <div key={task.id} className='bg-neutral-800 p-4 rounded-md'> 
                 <header className='flex justify-between'>
                  <h3 className='text-pink-900 text-md'>{task.title}</h3>
                   <div className="flex gap-x-2">

                    <Link to={`/edit-task/${task.id}`} className= "bg-zinc-600 px-2 py-1 text-xs rounded-md ">Edit</Link>
                    <button onClick={()=> handleDelete(task.id)} className= "bg-red-500 px-2 py-1 text-xs rounded-md ">Delete</button>
                   </div>
                 </header>
                    <p>{task.description}</p>
              </div>

          ))}
         </div>
 
    </div>
  )
}

export default TaskList