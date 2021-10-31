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
      <SubmitItemButton data-automation="form-btn" onClick={handleOpenClose}>
        +
      </SubmitItemButton>
      <Modal isOpen={open} style={customStyles} overlayClassName="overlay">
        <SubmitForm>
          <Input value={title} onChange={handleChange} placeholder="Add task" data-automation="submit-form-input" />
          <PriorityPickerContainer>
            <PriorityPicker
              onChange={selectPriorityOption}
              value={selectedPriorityOption}
              data-automation="priority-picker"
            />
          </PriorityPickerContainer>
          <SubmitFormButtonsContainer>
            {title ? (
              <AddButton onClick={handleSubmitTodo} data-automation="add-btn">Add task</AddButton>
            ) : (
              <AddButton
                onClick={handleSubmitTodo}
                disabled
                style={{ opacity: 0.3 }}
              >
                Add task
              </AddButton>
            )}
            <CancelButton onClick={handleOpenClose} data-automation="cancel-btn">Cancel</CancelButton>
          </SubmitFormButtonsContainer>
        </SubmitForm>
      </Modal>
    </Container>
  );
};

export default SubmitItemForm;
