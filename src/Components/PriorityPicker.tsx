import React from "react";
import { priorities } from "../shared/mockData";
import {
  Container,
  PriorityPickerButton,
  PriorityPickerCollapsiblePanel,
  PriorityPickerCollapsiblePanelItem,
} from "../styled-components";

interface IProps {
  onChange: (priority: string) => void;
  value?: string;
}

const PriorityPicker: React.FC<IProps> = ({ onChange, value }) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleVisible = React.useCallback(() => {
    setVisible((current: boolean) => !current);
  }, []);

  const handleVisibleFalse = React.useCallback(() => {
    setVisible(false);
  }, []);

  const handleSelectPriority = React.useCallback(
    (priority: string) => {
      onChange(priority);
      handleVisible();
    },
    [onChange, handleVisible]
  );

  const renderPriorities = React.useCallback(() => {
    return priorities.map((priority: string) => (
      <PriorityPickerCollapsiblePanelItem
        onClick={() => handleSelectPriority(priority)}
        isSelected={priority === value}
      >
        {priority}
      </PriorityPickerCollapsiblePanelItem>
    ));
  }, [value, handleSelectPriority]);

  const handleClickOutside = React.useCallback(
    (e: MouseEvent) => {
      const el = e.target;

      if (el instanceof Node && ref.current && !ref.current.contains(el)) {
        handleVisibleFalse();
      }
    },
    [handleVisibleFalse]
  );

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return function cleanup() {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <Container ref={ref}>
      <PriorityPickerButton onClick={handleVisible}>
        {value || priorities[3]}
      </PriorityPickerButton>
      {visible && (
        <PriorityPickerCollapsiblePanel>
          {renderPriorities()}
        </PriorityPickerCollapsiblePanel>
      )}
    </Container>
  );
};

export default PriorityPicker;
