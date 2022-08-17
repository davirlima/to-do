import { ClipboardText, PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "./Task";
import styles from "./TaskArea.module.css";

export function TaskArea() {
  const [taskText, setTaskText] = useState("");
  function handleAtualizeTaskText(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value);
  }

  const [tasks, setTasks] = useState([""]);
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    console.log("Task created: " + taskText);
    setTasks([...tasks, taskText]);
    setTaskText("");
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
        <input
          type="text"
          onChange={handleAtualizeTaskText}
          value={taskText}
          placeholder="Adicione uma nova tarefa"
          required={true}
          autoFocus={true}
        />
        <button type="submit" disabled={taskText == ""}>
          Criar <PlusCircle color="var(--gray-100)" size={16} weight="bold" />
        </button>
      </form>

      <div className={styles.tasksArea}>
        <div className={styles.informationTasks}>
          <h2 className={styles.createdTasks}>
            Tarefas criadas <span>{tasks.length - 1}</span>
          </h2>
          <h2 className={styles.concludedTasks}>
            Concluídas <span>0</span>
          </h2>
        </div>
        <Task task={tasks} isDefaultReturn={tasks.length == 1} />
      </div>
    </>
  );
}
