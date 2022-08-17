import "./global.css";
import { Header } from "./components/Header";
import { FormTask } from "./components/FormTask";
import { Tasks } from "./components/Tasks";

export function App() {
  return (
    <div>
      <Header />
      <FormTask />
      <Tasks />
    </div>
  );
}
