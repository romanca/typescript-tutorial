import React from "react";
import Modal from "react-modal";
import "../App.css";
import { priorities } from "../shared/mockData";
import {
  AddButton,
  CancelButton,
  Container,
  Input,
  PriorityPickerContainer,
  SubmitForm,
  SubmitFormButtonsContainer,
  SubmitItemButton,
} from "../styled-components";
import PriorityPicker from "./PriorityPicker";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 10,
    overflow: "visible",
  },
};

interface IProps {
  addTodo: AddTodo;
}

const SubmitItemForm: React.FC<IProps> = ({ addTodo }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>("");
  const [selectedPriorityOption, setSelectedPriorityOption] =
    React.useState<string>(priorities[3]);

  const selectPriorityOption = (priority: string) => {
    setSelectedPriorityOption(priority);
  };

  const handleOpenClose = () => {
    setOpen((current: boolean) => !current);
  };

  const handleSubmitTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const priority = selectedPriorityOption;
    e.preventDefault();
    addTodo(title, priority);
    handleOpenClose();
    setTitle("");
    setSelectedPriorityOption(priorities[3]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <Container>
      <SubmitItemButton onClick={handleOpenClose}>+</SubmitItemButton>
      <Modal isOpen={open} style={customStyles} overlayClassName="overlay">
        <SubmitForm>
          <Input value={title} onChange={handleChange} placeholder="Add task" />
          <PriorityPickerContainer>
            <PriorityPicker
              onChange={selectPriorityOption}
              value={selectedPriorityOption}
            />
          </PriorityPickerContainer>
          <SubmitFormButtonsContainer>
            {title ? (
              <AddButton onClick={handleSubmitTodo}>Add task</AddButton>
            ) : (
              <AddButton
                onClick={handleSubmitTodo}
                disabled
                style={{ opacity: 0.3 }}
              >
                Add task
              </AddButton>
            )}
            <CancelButton onClick={handleOpenClose}>Cancel</CancelButton>
          </SubmitFormButtonsContainer>
        </SubmitForm>
      </Modal>
    </Container>
  );
};

export default SubmitItemForm;
