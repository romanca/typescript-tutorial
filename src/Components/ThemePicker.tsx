import React from "react";
import PaletteOutlinedIcon from "@material-ui/icons/PaletteOutlined";
import { themes } from "../shared/mockData";
import {
  ButtonTitle,
  ThemeButton,
  ThemeColor,
  ThemePickerButton,
  ThemePickerContainer,
  ThemePickerPanel,
  ThemeTitle,
} from "../styled-components";

interface IProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemePicker: React.FC<IProps> = ({ theme, setTheme }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleOpenCLose = () => {
    setOpen((current: boolean) => !current);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSetTheme = (theme: Theme) => {
    setTimeout(() => {
      handleClose();
    }, 200);
    setTheme(theme);
  };

  const handleClickOutside = React.useCallback(
    (e: MouseEvent) => {
      const el = e.target;

      if (el instanceof Node && ref.current && !ref.current.contains(el)) {
        handleClose();
      }
    },
    [handleClose]
  );

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return function cleanup() {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <ThemePickerContainer ref={ref}>
      {open ? (
        <ThemePickerPanel data-automation="theme-panel">
          {Object.values(themes).map((item: Theme) => (
            <ThemeButton
              style={{ background: item.itemTheme }}
              onClick={() => handleSetTheme(item)}
            >
              <ThemeColor style={{ background: item.buttonTheme }} />
              <ThemeTitle>{item.title}</ThemeTitle>
            </ThemeButton>
          ))}
        </ThemePickerPanel>
      ) : null}
      <ThemePickerButton
        onClick={handleOpenCLose}
        style={{ background: open ? theme.itemTheme : null }}
        data-automation="theme-btn"
      >
        <PaletteOutlinedIcon />
        <ButtonTitle>Themes</ButtonTitle>
      </ThemePickerButton>
    </ThemePickerContainer>
  );
};

export default ThemePicker;
