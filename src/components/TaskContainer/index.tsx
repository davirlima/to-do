import { useState } from "react";
import { Task } from "../Task";
import { NewTaskForm } from "../NewTaskForm";
import { v4 as uuidv4 } from "uuid";
import { ClipboardText } from "phosphor-react";
import {
  DefaultInformationContainer,
  InformationAboutTasks,
  TasksContainer,
} from "./styles";

interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function TaskContainer() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateNewTask(taskContent: string) {
    setTasks((state) => [
      ...state,
      {
        id: uuidv4(),
        content: taskContent,
        isCompleted: false,
      },
    ]);
  }

  function handleDeleteTask(idOfTaskToDelete: string) {
    const tasksToKeep = tasks.filter((tasks) => {
      return tasks.id !== idOfTaskToDelete;
    });
    setTasks(tasksToKeep);
  }

  function handleChangeTaskStatus(idOfTaskToChengeStatus: string) {
    setTasks((state) =>
      state.map((task) => {
        if (task.id === idOfTaskToChengeStatus) {
          if (task.isCompleted == true) {
            return { ...task, isCompleted: false };
          } else {
            return { ...task, isCompleted: true };
          }
        } else {
          return task;
        }
      })
    );
  }

  function calculateConcludedTasks() {
    const numberOfConcludedTasks = tasks.reduce(function (
      allCompletedTasks,
      task
    ) {
      if (task.isCompleted == true) {
        allCompletedTasks++;
      }
      return allCompletedTasks;
    },
    0);

    if (numberOfConcludedTasks == 0) {
      return numberOfConcludedTasks.toString();
    } else {
      return `${numberOfConcludedTasks.toString()} de ${tasks.length}`;
    }
  }

  return (
    <div>
      <NewTaskForm handleCreateNewTask={handleCreateNewTask} />

      <TasksContainer>
        <InformationAboutTasks>
          <h2 className="createdTasks">
            Tarefas criadas <span>{tasks.length}</span>
          </h2>
          <h2 className="concludedTasks">
            Concluídas
            <span>{calculateConcludedTasks()}</span>
          </h2>
        </InformationAboutTasks>

        {tasks.length == 0 ? (
          <DefaultInformationContainer>
            <ClipboardText size={56} className="icon" />
            <h2>Você ainda não tem tarefas cadastradas</h2>
            <h3>Crie tarefas e organize seus itens a fazer</h3>
          </DefaultInformationContainer>
        ) : (
          <form>
            {tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  taskId={task.id}
                  taskContent={task.content}
                  deleteThisTask={handleDeleteTask}
                  changeStatusOfThisTask={handleChangeTaskStatus}
                />
              );
            })}
          </form>
        )}
      </TasksContainer>
    </div>
  );
}
