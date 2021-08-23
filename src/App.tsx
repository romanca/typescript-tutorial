import React from "react";
import TodosList from "./Components/TodosList";
import { FILTER_NAMES, themes, todos } from "./shared/mockData";
import FilterButton from "./Components/FilterButton";
import {
  AppContainer,
  FilterListContainer,
  Footer,
  Header,
} from "./styled-components";
import ThemePicker from "./Components/ThemePicker";
import SubmitItemForm from "./Components/SubmitItemForm";
import usePersistedState from "./use-persisted-state";
import Theme from "./Providers/Theme";

const initialTodos: Todo[] = todos;

const App = () => {
  const [todos, setTodos] = usePersistedState("todos", initialTodos);
  const [filter, setFilter] = React.useState<TFilterKey>("Active");
  const [theme, setTheme] = usePersistedState("themes", themes["blueTheme"]);

  const renderFilterList = React.useCallback(() => {
    return FILTER_NAMES.map((item) => {
      return (
        <FilterButton
          key={item}
          item={item}
          isPressed={item === filter}
          setFilter={setFilter}
        />
      );
    });
  }, [filter]);

  const completeTodo = (selectedTodo: Todo) => {
    setTodos((current) =>
      current.map((todo: Todo) => {
        if (todo === selectedTodo) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      })
    );
  };

  const addTodo = (title: string, priority: string) => {
    const newTodo: Todo = {
      title,
      id: Date.now(),
      complete: false,
      priority,
    };
    setTodos((current) => [...current, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodos((current) => current.filter((todo: Todo) => todo.id !== id));
  };

  const editTodo = (todo: Todo) => {
    setTodos((current) =>
      current.map((item: Todo) => {
        if (item.id === todo.id) {
          return todo;
        }
        return item;
      })
    );
  };

  return (
    <Theme theme={theme}>
      <AppContainer>
        <Header>
          <SubmitItemForm addTodo={addTodo} />
        </Header>
        <TodosList
          todos={todos}
          completeTodo={completeTodo}
          addTodo={addTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
          filter={filter}
        />
        <Footer>
          <FilterListContainer>{renderFilterList()}</FilterListContainer>
          <ThemePicker theme={theme} setTheme={setTheme} />
        </Footer>
      </AppContainer>
    </Theme>
  );
};

export default App;
