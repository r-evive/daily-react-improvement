import { sleep } from "../utils/utils";

export const TaskStatus = {
    PENDING: 'PENDING',
    DONE: 'DONE'
}

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]

export interface Task {
    id: number;
    title: string
    status: TaskStatus
}

const tasks: Task[] = [
    {
        id: 1,
        title: 'Do homework',
        status: TaskStatus.PENDING
    },
    {
        id: 2,
        title: 'Wash dishes',
        status: TaskStatus.DONE
    },
    {
        id: 3,
        title: 'Clean room',
        status: TaskStatus.PENDING
    }
]


export const fetchTasks = async (): Promise<Task[]> => {
    await sleep(3000)

    return tasks;
}