import { useState } from "react";
import { Task } from "./Task";
import styles from "./TaskArea.module.css";
import { NewTaskForm } from "./NewTaskForm";

export function TaskArea() {
  const [tasks, setTasks] = useState([
    {
      id: "0",
      content: "default",
      isCompleted: false,
    },
  ]);

  function handleDeleteTask(idOfTaskToDelete: string) {
    const tasksToKeep = tasks.filter((tasks) => {
      return tasks.id !== idOfTaskToDelete;
    });
    setTasks(tasksToKeep);
  }

  function handleChangeStatusTask(idOfTaskToChengeStatus: string) {
    const tasksWithModifiedyStatus = tasks.map((task) => {
      if (task.id == idOfTaskToChengeStatus) {
        switch (task.isCompleted) {
          case true:
            task.isCompleted = false;
            break;
          case false:
            task.isCompleted = true;
            break;
        }
      }
      return task;
    });
    setTasks(tasksWithModifiedyStatus);
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
      return `${numberOfConcludedTasks.toString()} de ${tasks.length - 1}`;
    }
  }

  return (
    <div>
      <NewTaskForm tasks={tasks} setTasks={setTasks} />
      <div className={styles.tasksArea}>
        <div className={styles.informationTasks}>
          <h2 className={styles.createdTasks}>
            Tarefas criadas <span>{tasks.length - 1}</span>
          </h2>
          <h2 className={styles.concludedTasks}>
            Concluídas
            <span>{calculateConcludedTasks()}</span>
          </h2>
        </div>
        <form>
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                isDefaultReturn={tasks.length == 1}
                deleteThisTask={handleDeleteTask}
                changeStatusOfThisTask={handleChangeStatusTask}
              />
            );
          })}
        </form>
      </div>
    </div>
  );
}
