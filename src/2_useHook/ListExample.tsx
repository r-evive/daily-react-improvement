
import { Suspense, use } from "react"
import { fetchTasks, type Task } from "./helpers"
import { Exercise } from "../shared/Exercise"


const ListItem = ({task}: { task: Task}) => {
    return <div className="w-full border flex flex-col gap-2 mb-4 rounded">
        <div className="text-white bg-gray-500">ID: {task.id}</div>
        <div className="w-full flex flex-col p-4">
            <span className="text-white">Title: {task.title}</span>
            <span className="text-white">Status: {task.status}</span>
        </div>
    </div>
}

export const List = ({promise}: {promise: Promise<Task[]>}) => {
    const tasks = use(promise)

    return <div className="grid grid-cols-3 w-full gap-4">
        {tasks.map(task => <ListItem key={task.id} task={task}/>)}
    </div>
}

export const ListExample = () => {
    const tasks = fetchTasks();

    return (
    <Exercise title="2. React use() + Suspense" description="Fetch asynchronous data using React's use() hook together with Suspense for declarative loading states.">
        <div className="flex flex-row w-full gap-4 items-center justify-center">
            <Suspense fallback="Loading tasks...">
                <List promise={tasks}/>
            </Suspense>
        </div>
    </Exercise>)
}
