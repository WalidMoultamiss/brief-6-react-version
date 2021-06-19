// import Button from './Button'
import { FaTimes } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'

const Task =({task, onDelete, onToggle})=>{
    return (
        // <div className="task"  >
        <div className={`task ${task.reminder ? 'reminder' : ''}`}  >
        {/* <div className="task" onDoubleClick={()=> onToggle(task.id)} > */}
            <div className="taskHeader">
            <h3 key={task.id}>{task.text} </h3>
            <div>
            <FaBell color="lightGreen" onClick={()=> onToggle(task.id)} /> 
            &nbsp;&nbsp;
            
            {/* <FaTimes onClick={onDelete} color="red"/>  */}
            <FaTimes onClick={()=> onDelete(task)} color="red"/> 
            
            
            </div>
            {/* <Button text="delete" /> */}
            </div>
            <p key={task.id}>{task.day}</p>
        </div>
    )
}

export default Task