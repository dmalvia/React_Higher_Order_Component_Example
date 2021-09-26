import "./App.css";
import SearchTodos from "./TodoList";
import TodoList from "./TodoList";
import SearchUsers from "./UsersList";
import UsersList from "./UsersList";

function App() {
  return (
    <div className="App">
      <h2>Higher Order Component</h2>
      <div className="section">
        <div>
          <SearchUsers />
        </div>
        <div>
          <SearchTodos />
        </div>
      </div>
    </div>
  );
}

export default App;
