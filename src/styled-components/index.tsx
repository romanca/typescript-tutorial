import styled from "styled-components";

export const ThemePickerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThemePickerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 6px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  margin-left: 3px;
`;

export const ButtonTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

export const ThemePickerPanel = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  width: 250px;
  height: 150px;
  position: absolute;
  margin-top: -200px;
  display: flex;
  flex-wrap: wrap;
  background: white;
`;

export const ThemeTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  font-size: 12px;
`;

export const ThemeButton = styled.div`
  flex: 1 0 33%;
  margin: 3px;
  border: 1px solid grey;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
`;

export const ThemeColor = styled.div`
  width: 100%;
  height: 50%;
`;

export const TodoItemContainer = styled.div`
  margin: 5px;
  width: 750px;
  height: 50px;
  display: flex;
  border: 1px solid transparent;
  box-shadow: 0px 0px 10px 0px black;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    width: 450px;
  }
  background-color: whitesmoke;
`;

export const CheckBoxContainer = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 15%;
  }
`;

export const TodoPriorityPickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  margin-right: 10px;
  @media (max-width: 768px) {
    display: flex;
    margin-right: 25px;
  }
`;

export const TodoTitleContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    display: flex;
    width: 60%;
  }
`;

export const TodoButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10%;
  height: 100%;
  margin-right: 10px;
  @media (max-width: 768px) {
    display: flex;
    width: 15%;
  }
`;

export const TodoToggleButtonContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TodosListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 86vh;
  margin-top: 10px;
  overflow: scroll;
  @media (max-width: 768px) {
    display: flex;
  }
  background-color: transparent;
`;

export const Input = styled.input`
  background: transparent;
  outline: none;
  border-width: 0px 0px 1px;
  font-size: 16px;
  width: 100%;
`;

export const SubmitItemButton = styled.button`
  width: 35px;
  height: 35px;
  box-shadow: 0px 0px 10px 0px ${(props: any) => props.theme.buttonTheme};
  background: ${(props: any) => props.theme.buttonTheme};
  border-radius: 50%;
  border: none;
  outline: none;
  color: whitesmoke;
  font-size: 15px;
  cursor: pointer;
  margin-left: 25%;
`;

export const SubmitForm = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-top: 10px;
`;

export const Header = styled.div`
  background: ${(props: any) => props.theme.header};
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const SubmitItemInput = styled.textarea`
  height: 50px;
  border: 1px solid grey;
  outline: none;
  border-radius: 5px;
  font-size: 15px;
  padding: 5px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
`;

export const AddButton = styled.button`
  border: none;
  outline: none;
  background: ${(props: any) => props.theme.buttonTheme};
  padding: 10px;
  margin-right: 5px;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  color: grey;
  font-size: 15px;
  cursor: pointer;
`;

export const SubmitFormButtonsContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${(props: any) => props.theme.appTheme};
`;

export const FilterListContainer = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-between;
`;

export const FiltersButton = styled.button`
  margin-left: 7px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
`;

export const Container = styled.div``;

export const PriorityPickerButton = styled.div`
  border: 1px solid grey;
  width: fit-content;
  height: 20px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background: ${(props: any) => props.theme.appTheme};
  }
`;

export const PriorityPickerCollapsiblePanel = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  position: fixed;
  margin-top: 2px;
  background: white;
  cursor: pointer;
  width: fit - content;
  z-index: 1;
`;

export const PriorityPickerCollapsiblePanelItem = styled.div`
  padding: 10px;
  border-radius: 3px;
  background: ${(props: any) => props.isSelected && props.theme.appTheme};
  :hover {
    background: ${(props: any) => props.theme.appTheme};
  }
`;

export const PriorityPickerContainer = styled.div`
  margin-top: 10px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${(props: any) => props.theme.footer};
  height: 7%;
  position: fixed;
  bottom: 0;
`;

export const MessageTitle = styled.span`
  font-size: 20px;
  text-align: center;
  padding: 15px;
  font-weight: 600;
`;
