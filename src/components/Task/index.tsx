import { Check, Trash } from "phosphor-react";
import { TaskContainer } from "./styles";

interface TaskProps {
  taskId: string;
  taskContent: string;

  deleteThisTask: (idOfTaskToDelete: string) => void;
  changeStatusOfThisTask: (idOfTaskToChange: string) => void;
}

export function Task({
  taskId,
  taskContent,
  deleteThisTask,
  changeStatusOfThisTask,
}: TaskProps) {
  return (
    <TaskContainer>
      <input
        id="checkbox"
        type="checkbox"
        onClick={() => changeStatusOfThisTask(taskId)}
      />
      <span>
        <Check className="checkIcon" weight="bold" />
      </span>
      <label htmlFor="checkbox">{taskContent}</label>
      <button onClick={() => deleteThisTask(taskId)}>
        <Trash size={20} />
      </button>
    </TaskContainer>
  );
}
