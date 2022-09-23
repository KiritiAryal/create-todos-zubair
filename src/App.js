import Heading from "./components/Heading";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div className="App">
      <Heading />
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
