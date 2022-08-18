import { Check, ClipboardText, Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  task: string[];
  isDefaultReturn: boolean;
}

export function Task(props: TaskProps) {
  if (props.isDefaultReturn == true) {
    console.log("entrou aqui");
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
  } else {
    return (
      <div className={styles.taskContainer}>
        <input id="checkbox" type="checkbox" value={props.task} />
        <span>
          <Check className={styles.checkIcon} weight="bold" />
        </span>
        <label className={styles.taskContent} htmlFor="checkbox">
          {props.task}
        </label>
        <button className={styles.deleteButton}>
          <Trash size={20} />
        </button>
      </div>
    );
  }
}
