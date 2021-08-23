interface Todo {
  title: string;
  id: number;
  complete?: boolean;
  priority?: string;
}

interface Theme {
  header: string;
  footer: string;
  title: string;
  buttonTheme: string;
  appTheme: string;
  itemTheme: string;
}

type CompleteTodo = (selectedTodo: Todo) => void;
type AddTodo = (title: string, priority: string) => void;
type RemoveTodo = (id: number) => void;
type EditTodo = (todo: Todo) => void;
type SelectPriorityOption = (priority: string) => void;
type SetFilter = (item: string) => void;
type SelectPriorityOption = (priority: string) => void;

type TFilterKey =
  | "All"
  | "Active"
  | "Completed"
  | "Priority1"
  | "Priority2"
  | "Priority3"
  | "Priority4";

type TThemeKey =
  | "blueTheme"
  | "redTheme"
  | "orangeTheme"
  | "yellowTheme"
  | "purpleTheme"
  | "greenTheme";

type TPriorities = "priority1" | "priority2" | "priority3" | "priority4";

type TFilterMethod = (todo: Todo) => void;
