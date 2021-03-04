import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TodoList from "../../components/todoList/TodoList";
import * as TodoActions from "../../actions/todosAction";
import { getVisibleTodos } from "../../selectors";

const mapStateToProps = (state) => ({
  filteredTodos: getVisibleTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
