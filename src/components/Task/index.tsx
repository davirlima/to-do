import { Check, Trash } from "phosphor-react";
import { TaskContainer } from "./styles";

interface TaskProps {
  task: {
    id: string;
    content: string;
    isCompleted: boolean;
  };

  deleteThisTask: (idOfTaskToDelete: string) => void;
  changeStatusOfThisTask: (idOfTaskToChange: string) => void;
}

export function Task({
  task,
  deleteThisTask,
  changeStatusOfThisTask,
}: TaskProps) {
  return (
    <TaskContainer>
      <input
        id="checkbox"
        type="checkbox"
        onClick={() => changeStatusOfThisTask(task.id)}
        defaultChecked={task.isCompleted}
      />
      <span>
        <Check className="checkIcon" weight="bold" />
      </span>
      <label htmlFor="checkbox">{task.content}</label>
      <button onClick={() => deleteThisTask(task.id)}>
        <Trash size={20} />
      </button>
    </TaskContainer>
  );
}
