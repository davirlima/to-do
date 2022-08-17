import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { TaskArea } from "./components/TaskArea";

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <TaskArea />
      </main>
    </div>
  );
}
