import { Check, ClipboardText, Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  newTask: string;
  isDefaultReturn: boolean;
  onDeleteTask: (taskToDelete: string) => void;
}

export function Task(props: TaskProps) {
  function deleteThisTask() {
    props.onDeleteTask(props.newTask);
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
  } else if (props.newTask !== "") {
    return (
      <div className={styles.taskContainer}>
        <input id="checkbox" type="checkbox" value={props.newTask} />
        <span>
          <Check className={styles.checkIcon} weight="bold" />
        </span>
        <label className={styles.taskContent} htmlFor="checkbox">
          {props.newTask}
        </label>
        <button onClick={deleteThisTask} className={styles.deleteButton}>
          <Trash size={20} />
        </button>
      </div>
    );
  } else {
    return <span></span>;
  }
}
