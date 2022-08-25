import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { TaskContainer } from "./components/TaskContainer";

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <TaskContainer />
      </main>
    </div>
  );
}
