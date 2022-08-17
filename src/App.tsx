import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { FormTask } from "./components/FormTask";
import { TaskArea } from "./components/TaskArea";

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <FormTask />
        <TaskArea />
      </main>
    </div>
  );
}
