import { useState } from 'react'
const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)


    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text){
            alert('Please fill the form')
            return
        }
        onAdd({text, day , reminder})

        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        
            <form className="add-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="">Task</label>
                    <input type="text" placeholder='Add Task' value={text} onChange={(e)=>{ setText(e.target.value)}} />
                </div>
            

            {/* youppie */}

            
            
                <div className="form-control form-control-input">
                    <label htmlFor="">Day n time</label>
                    <input type="text" placeholder='Add day and time' value={day} onChange={(e)=>{ setDay(e.target.value)}} />
                </div>
            

            {/* youppie */}

            
            
                <div className="form-control form-control-check">
                    <label htmlFor="">Reminder</label>
                    <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>{ setReminder(e.target.checked)}} />
                </div>

            <input type="submit" 
            value="Save" 
            className="btn btn-block" />
            </form>


            
            
        
    )
}

export default AddTask
