import React from 'react';
import Header from './components/Headers';
import './App.css';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState ,useEffect } from 'react'

const App = ()=> {
// function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {

    const getTasks = async ()=>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    
    getTasks()
  }, [tasks])


//fetchTasks

const fetchTasks = async ()=>{
  const res = await fetch('http://localhost:5001/tasks')
  const data = await res.json()
  return data

}







//delete
  
    const deleteTask = async (id)=>{
      await fetch(`http://localhost:5001/tasks/${id.id}`,{method:'DELETE'})
      // console.log('delete ', task.id)
      setTasks(tasks.filter((task) => task.id !== id.id))
    }

    //toggle
    const toggleReminder = (id)=>{
      setTasks(
        tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task ) 
      )
    }


    const addTask = async (task) =>{

      const res = await fetch('http://localhost:5001/tasks/',{
        method:'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })

      const data = res.json()

      setTasks([...tasks, data])

      // console.log(task);
      // const id = Math.floor(Math.random() * 10000) + 1
      // console.log(id);
      
      // const newTask ={ id, ...task }
      // setTasks([...tasks,newTask])
    }

    

  return (
    <div className="App">
      <div className="container">
      {/* <Header title='hello' /> */}
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask} title="task manager" />

      {showAddTask && <AddTask onAdd={addTask} />}
      {/* <Tasks tasks={tasks} onDelete={deleteTask} /> */}
      {console.log(tasks.length)
        // tasks.map(e => e.id)
      }
      {tasks.length > 0 ? (
        
        <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />

      ) : (
        'nothing to show'
      )}
      {/* <h1>hello {x ? name : 'nop'}</h1> */}
      </div>
    </div>
  );
}

// class App extends React.Component {
//   render(){
//     return <h1>Hello from react</h1>
//   }
// }

export default App;
