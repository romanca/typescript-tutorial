import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import {
  CheckBoxContainer,
  Container,
  Input,
  TodoButtonsContainer,
  TodoItemContainer,
  TodoPriorityPickerContainer,
  TodoTitleContainer,
  TodoToggleButtonContainer,
} from "../styled-components";
import PriorityPicker from "./PriorityPicker";

interface TodoIProps {
  todo: Todo;
  completeTodo: CompleteTodo;
  removeTodo: RemoveTodo;
  editTodo: EditTodo;
}

const TodoItem: React.FC<TodoIProps> = ({
  todo,
  completeTodo,
  removeTodo,
  editTodo,
}) => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState<boolean>(false);
  const [toggleTodo, setToggleTodo] = React.useState<boolean>(false);
  const [editTitle, setEditTitle] = React.useState<string>(todo.title);
  const [selectedPriorityOption, setSelectedPriorityOption] = React.useState(
    todo.priority
  );

  const selectPriorityOption = (priority: string) => {
    setSelectedPriorityOption(priority);
  };

  const handleToggleCheckBox = () => {
    setToggleCheckBox((current: boolean) => !current);
  };

  const handleToggleTodo = () => {
    setToggleTodo((current: boolean) => !current);
  };

  const handleChangeEditTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const handleCompleteTodo = (todo: Todo) => {
    completeTodo(todo);
    handleToggleCheckBox();
  };

  const handleEditTodo = (todo: Todo) => {
    editTodo({
      ...todo,
      title: editTitle,
      complete: todo.complete,
      priority: selectedPriorityOption,
    });
    handleToggleTodo();
  };

  return (
    <Container>
      <TodoItemContainer>
        <CheckBoxContainer>
          {!todo.complete ? (
            <CheckCircleOutlineRoundedIcon
              style={{
                color:
                  todo.priority === "priority4"
                    ? "black"
                    : todo.priority === "priority3"
                    ? "red"
                    : todo.priority === "priority2"
                    ? "orange"
                    : todo.priority === "priority1"
                    ? "green"
                    : undefined,
              }}
              onClick={() => handleCompleteTodo(todo)}
            />
          ) : (
            <CheckCircleRoundedIcon onClick={() => handleCompleteTodo(todo)} />
          )}
        </CheckBoxContainer>
        <TodoTitleContainer>
          {!toggleTodo ? (
            <Container
              style={{
                textDecoration: todo.complete && "3px line-through",
              }}
            >
              {todo.title}
            </Container>
          ) : (
            <Container
              style={{
                width: "90%",
                display: "flex",
                textDecoration: todo.complete && "3px line-through",
              }}
            >
              <Input
                type="text"
                value={editTitle}
                onChange={handleChangeEditTitle}
                style={{
                  textDecoration: todo.complete && "3px line-through",
                }}
              />
            </Container>
          )}
        </TodoTitleContainer>
        <TodoPriorityPickerContainer>
          {toggleTodo ? (
            <PriorityPicker
              onChange={selectPriorityOption}
              value={selectedPriorityOption}
            />
          ) : null}
        </TodoPriorityPickerContainer>
        <TodoButtonsContainer>
          <TodoToggleButtonContainer>
            {!toggleTodo ? (
              <EditIcon color="primary" onClick={handleToggleTodo} />
            ) : (
              <CheckCircleRoundedIcon
                style={{ color: "green" }}
                onClick={() => handleEditTodo(todo)}
              />
            )}
          </TodoToggleButtonContainer>
          <TodoToggleButtonContainer>
            {!toggleTodo ? (
              <DeleteOutlineIcon
                color="secondary"
                onClick={() => removeTodo(todo.id)}
              />
            ) : (
              <CancelRoundedIcon color="secondary" onClick={handleToggleTodo} />
            )}
          </TodoToggleButtonContainer>
        </TodoButtonsContainer>
      </TodoItemContainer>
    </Container>
  );
};

export default TodoItem;
