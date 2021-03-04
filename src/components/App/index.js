import "./App.css";

import VisibleTodoList from "../../containers/visibleTodoList";
import FilterLink from "../../containers/filterLink/FilterLink";

function App() {
  return (
    <div className="App">
      <VisibleTodoList />
      <FilterLink />
    </div>
  );
}

export default App;
