import { Check, ClipboardText, Trash } from "phosphor-react";
import styles from "./Task.module.css";

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
    <div className={styles.taskContainer}>
      <input
        id="checkbox"
        type="checkbox"
        onClick={() => changeStatusOfThisTask(taskId)}
      />
      <span>
        <Check className={styles.checkIcon} weight="bold" />
      </span>
      <label className={styles.taskContent} htmlFor="checkbox">
        {taskContent}
      </label>
      <button
        onClick={() => deleteThisTask(taskId)}
        className={styles.deleteButton}
      >
        <Trash size={20} />
      </button>
    </div>
  );
}
