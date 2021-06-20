import React from 'react';
import Header from './components/Headers';
import './App.css';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

const App = ()=> {
// function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctor Appointment',
            day: 'March 2nd at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Reacting Appointment',
            day: 'Feb 5th at 3:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Vue ? what vue',
            day: 'Feb 5th at 2:30pm',
            reminder: false
        },
    ]
)

//delete
  
    const deleteTask = (id)=>{
      // console.log('delete ', task.id)
      setTasks(tasks.filter((task) => task.id !== id.id))
    }

    //toggle
    const toggleReminder = (id)=>{
      setTasks(
        tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task ) 
      )
    }


    const addTask = (task) =>{
      console.log(task);
      const id = Math.floor(Math.random() * 10000) + 1
      console.log(id);
      
      const newTask ={ id, ...task }
      setTasks([...tasks,newTask])
    }

    

  return (
    <div className="App">
      <div className="container">
      {/* <Header title='hello' /> */}
      <Header onAdd={()=> setShowAddTask(!showAddTask)} title="task manager" />

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
