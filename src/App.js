import "./App.css";
import SearchTodos from "./TodoList";
import SearchUsers from "./UsersList";

function App() {
  return (
    <div className="App">
      <h2>Higher Order Component</h2>
      <div className="section">
        <SearchUsers />
        <SearchTodos />
      </div>
    </div>
  );
}

export default App;
