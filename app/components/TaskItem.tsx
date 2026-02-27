"use client"

type Task = {
  id: number
  text: string
  completed: boolean
}

type Props = {
  task: Task
  onDelete: (id: number) => void
  onToggle: (id: number) => void
}

export default function TaskItem({ task, onDelete, onToggle }: Props) {
  return (
    <li className="flex justify-between items-center bg-gray-50 p-2 rounded">
      <span
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.text}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500"
      >
        ❌
      </button>
    </li>
  )
}