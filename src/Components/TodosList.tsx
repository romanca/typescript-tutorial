import React from "react";
import "../App.css";
import { FILTER_MAP } from "../shared/mockData";
import {
  Container,
  MessageTitle,
  TodosListContainer,
} from "../styled-components";
import TodoItem from "./TodoItem";

interface IProps {
  todos: Todo[];
  completeTodo: CompleteTodo;
  addTodo: (title: string, priority: string) => void;
  removeTodo: (id: number) => void;
  editTodo: EditTodo;
  filter: TFilterKey;
}

const TodosList: React.FC<IProps> = ({
  todos,
  completeTodo,
  removeTodo,
  editTodo,
  filter,
}) => {
  const renderTodosList = React.useCallback(() => {
    return (
      <Container>
        {todos.filter(FILTER_MAP[filter]).map((todo: Todo) => (
          <TodoItem
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
      </Container>
    );
  }, [filter, todos, completeTodo, removeTodo, editTodo]);

  React.useEffect(() => {
    renderTodosList();
  }, [renderTodosList]);

  return (
    <Container>
      {todos && todos.filter(FILTER_MAP[filter]).length ? (
        <TodosListContainer>{renderTodosList()}</TodosListContainer>
      ) : (
        <MessageTitle>
          <div>"You have no tasks!"</div>
        </MessageTitle>
      )}
    </Container>
  );
};

export default TodosList;
