import "./global.css";
import { Header } from "./components/Header";
import { FormTask } from "./components/FormTask";
import { TaskArea } from "./components/TaskArea";

export function App() {
  return (
    <div>
      <Header />
      <FormTask />
      <TaskArea />
    </div>
  );
}
