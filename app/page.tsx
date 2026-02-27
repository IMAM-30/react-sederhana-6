"use client"

import TaskItem from "./components/TaskItem"
import { useState } from "react"


export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Belajar React", completed: false },
    { id: 2, text: "Kerjakan tugas", completed: true },
  ])

  const [input, setInput] = useState("")

  const addTask = () => {
    if (input.trim() === "") return

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setInput("")
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const completedCount = tasks.filter((task) => task.completed).length

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Task Manager
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border p-2 rounded"
            placeholder="Tambah task..."
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 rounded"
          >
            +
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleTask}
            />
          ))}
        </ul>

        <p className="mt-4 text-sm text-gray-500 text-center">
          Selesai: {completedCount} / {tasks.length}
        </p>
      </div>
    </main>
  )
}
