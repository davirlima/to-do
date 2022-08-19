import { Check, ClipboardText, Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  task: {
    id: string;
    content: string;
    isCompleted: boolean;
  };
  isDefaultReturn: boolean;
  deleteThisTask: (idOfTaskToDelete: string) => void;
  changeStatusOfThisTask: (idOfTaskToChange: string) => void;
}

export function Task(props: TaskProps) {
  function deleteThisTask() {
    props.deleteThisTask(props.task.id);
  }

  function changeStatusOfThisTask() {
    props.changeStatusOfThisTask(props.task.id);
  }

  if (props.isDefaultReturn == true) {
    return (
      <div className={styles.defaultInformation}>
        <ClipboardText size={56} color="var(--gray-400)" />
        <h2 className={styles.titleDefaultInformation}>
          Você ainda não tem tarefas cadastradas
        </h2>
        <h3 className={styles.subtitleDefaultInformation}>
          Crie tarefas e organize seus itens a fazer
        </h3>
      </div>
    );
  } else if (props.task.content !== "default") {
    return (
      <div className={styles.taskContainer}>
        <input id="checkbox" type="checkbox" onClick={changeStatusOfThisTask} />
        <span>
          <Check className={styles.checkIcon} weight="bold" />
        </span>
        <label className={styles.taskContent} htmlFor="checkbox">
          {props.task.content}
        </label>
        <button onClick={deleteThisTask} className={styles.deleteButton}>
          <Trash size={20} />
        </button>
      </div>
    );
  } else {
    return <></>;
  }
}
