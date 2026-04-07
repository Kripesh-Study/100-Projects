import React, { useEffect, useState } from 'react';

const TasksContainer = ({count,onSetCount}) => {
    
    const URL = "/api/todos"
    
    
    const [editValue, setEditValue] = useState('');
    const [todos, setTodos] = useState([])
    const [editingId, setEditingId] = useState(null);

    useEffect(function () {

        fetch(URL).then((data) => {
            return data.json()
        }).then((data) => {
            setTodos(data.todoLists)
            console.log(todos)
        })


        // if (todos.length > 35) {
        //     setMainText(mainText.slice(0, 35).concat("..."))
        // }
        setTimeout(() => {
            console.log(todos)
        }, 1000)

    }, [])


    function editView(item,i) {
        
        

        return (
            <div key={i} className='border px-4 py-2 rounded flex justify-between'>
                <label className='flex gap-2 cursor-pointer '>
                    <input type="checkbox" />
                    <input type='text' value={editValue} onChange={(e) => setEditValue(e.target.value)} className='text-start select-none border px-3 outline-none rounded' />
                </label>
                <div className='flex gap-4 cursor-pointer' >
                    <button className='bg-blue-700 px-4 py-1 text-nowrap rounded-sm text-sm cursor-pointer text-white' onClick={() => {updateTask(item,editValue);setEditingId(null);setEditValue(null)}} >Save</button>
                    <button onClick={() => { setEditingId(null) ; setEditValue(null) }} className='text-black px-4 py-1 text-nowrap rounded-sm text-sm cursor-pointer bg-white'>Cancel</button>
                </div>
            </div>
        )

    }

    function updateTask(item,editValue) {
           setTodos(prev => prev.map(todo=> todo._id === item._id ?{...todo,title:editValue}:todo))
        fetch(`/api/todos/update/${item._id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: editValue
            })

        })
        // .then(()=>{
        //     console.log(todos)
        //    setTodos(prev => prev.map(todo=> todo._id === item._id ?{...todo,title:editValue}:todo))
        //    console.log(todos)
        // })

    }

    function deleteItem(id) {
        setTodos(prev => prev.filter(todo => todo._id !== id))
        fetch(`/api/todos/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    function displayView(item,i) {
        return (
            <div key={i} className='border px-4 py-2 rounded flex justify-between'>
                <label className='flex gap-2 cursor-pointer '>
                    <input type="checkbox" />
                    <span className='text-start select-none'>{item.title}</span>
                </label>
                <div className='flex gap-4 cursor-pointer' >
                    <div onClick={() =>  {setEditingId(item._id); setEditValue(item.title)} }><i className="ri-pencil-line"></i></div>
                    <div onClick={() => deleteItem(item._id)}><i className="ri-delete-bin-line"></i></div>
                </div>
            </div>
        )
    }



    return (
        <div className='flex flex-col gap-5 h-92 overflow-y-scroll'>
            {todos.map((item, i) => {
                if (editingId !== null) {
                    //   return editView(item)
                    if (item._id == editingId) {
                        return editView(item,i)
                    }
                }
                return displayView(item,i)
            })}
        </div>



    );
};

export default TasksContainer;