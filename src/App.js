import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TasksList';

function App() {
  return (
    <div className="App">
     <h1>Hello World!</h1>
    

   <TaskForm/>
   <TaskList/>
    </div>
  );
}

export default App;
