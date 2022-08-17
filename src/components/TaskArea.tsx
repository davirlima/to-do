import { ClipboardText } from "phosphor-react";
import styles from "./TaskArea.module.css";

export function TaskArea() {
  return (
    <div className={styles.tasksArea}>
      <div className={styles.informationTasks}>
        <h2 className={styles.createdTasks}>
          Tarefas criadas <span>0</span>
        </h2>
        <h2 className={styles.concludedTasks}>
          Concluídas <span>0</span>
        </h2>
      </div>
      <div className={styles.defaultInformation}>
        <ClipboardText size={56} color="var(--gray-400)" />
        <h2 className={styles.titleDefaultInformation}>
          Você ainda não tem tarefas cadastradas
        </h2>
        <h3 className={styles.subtitleDefaultInformation}>
          Crie tarefas e organize seus itens a fazer
        </h3>
      </div>
    </div>
  );
}
