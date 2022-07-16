import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addTask, updateTask} from '../redux/Slices/taskSlice'
import {v4 as uuid} from 'uuid';
import {useNavigate,useParams} from 'react-router-dom'

const TaskFomr = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const tasks =  useSelector(state => state.tasks);
    const [task,setTask] = useState({
        title : '',
        description : ''

    });

    const navigate = useNavigate();
     
      const handleChange = e => {
          setTask({...task, [e.target.name] : e.target.value});
          
      }
  
        const handleSubmit = e => {
            e.preventDefault();

            if(params.id) {
                 dispatch(updateTask(task))
              navigate('/');

            }else {

              dispatch(addTask({
                  ...task,
                  id : uuid()
                }));
              navigate('/');
            }
        }


        useEffect(()=>{
             if(params.id){
              setTask(tasks.find((task) => task.id === params.id))
             }
        },[])

  return (
    <>
    <form onSubmit={handleSubmit} className = "bg-zinc-800 max-w-sm p-4">
        <label htmlFor="title" className='block text-xs font-bold'>Task:</label>
        <input 
         type="text" 
         name='title'
          placeholder='title' 
          onChange={handleChange} value={task.title}
           className = "w-full p-2 rounded-md bg-zinc-600 mb-2 mt-1"
          />
          <label htmlFor="descripcion" className='block text-xs font-bold'>Descripcion:</label>
        <textarea 
           className = "w-full p-2 rounded-md bg-zinc-600 mb-2 mt-1"
        value={task.description} name='description' placeholder='description' onChange={handleChange}/>

        <button className='bg-indigo-600 px-2 py-1 w-full rounded-md'>Save</button>

    </form>
      
    </>
    
  )
}

export default TaskFomr;