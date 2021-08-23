import React from "react";
import { FiltersButton } from "../styled-components";

interface IProps {
  item: TFilterKey;
  isPressed?: boolean;
  setFilter: (item: TFilterKey) => void;
}

const FilterButton: React.FC<IProps> = ({ item, isPressed, setFilter }) => {
  return (
    <FiltersButton
      style={{ background: isPressed ? "white" : "transparent" }}
      type="button"
      aria-pressed={isPressed}
      onClick={() => setFilter(item)}
    >
      {item}
    </FiltersButton>
  );
};

export default FilterButton;
