import { Task } from "../../interface/interface.task";

export interface ListTasksProps {
    tasks: Task[];
    toggleTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
}