import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { FormContainer } from "./styles";

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
    <FormContainer onSubmit={createNewTask}>
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
    </FormContainer>
  );
}
