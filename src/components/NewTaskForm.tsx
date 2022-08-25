import styles from "./NewTaskForm.module.css";

import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface NewTaskFormProps {
  handleCreateNewTask: (taskContent: string) => void;
}

export function NewTaskForm({ handleCreateNewTask }: NewTaskFormProps) {
  const [taskContent, setTaskContent] = useState("");
  function handleCreateTaskContent(event: ChangeEvent<HTMLInputElement>) {
    setTaskContent(event.target.value);
  }

  function createNewTask(event: FormEvent) {
    event.preventDefault();
    handleCreateNewTask(taskContent);
    setTaskContent("");
  }

  return (
    <form onSubmit={createNewTask} className={styles.taskForm}>
      <input
        type="text"
        onChange={handleCreateTaskContent}
        value={taskContent}
        placeholder="Adicione uma nova tarefa"
        required={true}
        autoFocus={true}
      />
      <button type="submit" disabled={taskContent == ""}>
        Criar <PlusCircle color="var(--gray-100)" size={16} weight="bold" />
      </button>
    </form>
  );
}
