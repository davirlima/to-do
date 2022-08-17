import styles from "./FormTask.module.css";
import { PlusCircle } from "phosphor-react";

export function FormTask() {
  return (
    <form className={styles.taskForm}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <PlusCircle color="var(--gray-100)" size={16} weight="bold" />
      </button>
    </form>
  );
}
