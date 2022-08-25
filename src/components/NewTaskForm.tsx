import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./NewTaskForm.module.css";

interface NewTaskFormProps {
  tasks: {
    id: string;
    content: string;
    isCompleted: boolean;
  }[];
  setTasks: (
    task: {
      id: string;
      content: string;
      isCompleted: boolean;
    }[]
  ) => void;
}

export function NewTaskForm({ tasks, setTasks }: NewTaskFormProps) {
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        content: taskText,
        isCompleted: false,
      },
    ]);
    setTaskText("");
  }

  const [taskText, setTaskText] = useState("");

  function handleAtualizeTaskText(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value);
  }

  return (
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
  );
}
