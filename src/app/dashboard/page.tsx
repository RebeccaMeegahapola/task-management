"use client"

import {SquarePen, Trash} from "lucide-react";
import {useState} from "react";

type TaskProps = {
    task: string,
}

export default function DashboardPage() {

    const [newTask, setNewTask] = useState<TaskProps>({
        task: '',
    })

    const [itemList, setItemList] = useState<TaskProps[]>([])

    const addNewTask = () => {
        setItemList([...itemList, newTask]);
        setNewTask({
            task: ''
        })
    }

    const [editIndex, setEditIndex] = useState<number | null>(null)

    const deleteTask = (index: number) => {
        setItemList((prevTask) => prevTask.filter((_, i) => i !== index))
    }

    const editTask = (index: number, updatedValue: string) => {
        setItemList((prevTask) => prevTask.map((item, i) => i === index ? {...item, task: updatedValue} : item))
    }

    return (
        <div>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16 py-5">
                <div className="w-full max-w-sm mx-auto px-4 py-2">
                    <h1 className="text-gray-800 font-bold text-xl uppercase">To-Do List</h1>
                </div>
                <form className="w-full max-w-sm mx-auto px-4 py-4 bg-gray-100 rounded-lg mt-4">
                    <div className="flex items-center">
                        <div className="flex flex-col w-full">
                            <input
                                className="appearance-none bg-transparent border-b-2 border-teal-500 w-full text-gray-700 mr-3 py-4 px-2 leading-tight focus:outline-none"
                                type="text"
                                placeholder="What is the task today?"
                                value={newTask.task}
                                onChange={(e) => setNewTask({...newTask, task: e.target.value})}
                            />
                        </div>

                        <button
                            className="ml-4 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-4 rounded"
                            type="button"
                            onClick={addNewTask}
                        >
                            Add Task
                        </button>
                    </div>
                </form>
                {
                    itemList.map((item, index) => (
                        <div
                            key={index}
                            className='flex justify-between items-center mt-6 px-4 w-full max-w-sm mx-auto bg-teal-400 p-3 rounded-md'
                        >
                            {editIndex === index ? (
                                <div>
                                    <input
                                        className="appearance-none bg-teal-200 border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                                        type="text"
                                        placeholder="What is the task today?"
                                        value={item.task}
                                        onChange={(e) => editTask(index, e.target.value)}
                                        onBlur={() => setEditIndex(null)}
                                    />
                                </div>
                            ) : (
                                <div className="flex flex-col">
                                    <p className='text-white text-sm font-semibold'>Task: {item.task}</p>
                                </div>
                            )}

                            <div className='flex gap-4'>
                                <SquarePen size={20} className='text-white' onClick={() => setEditIndex(index)}/>
                                <Trash size={20} className='text-white' onClick={() => deleteTask(index)}/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

