export const todos: Todo[] = [
  {
    title: "todo 1",
    id: 1,
    complete: false,
    priority: "priority4",
  },
  {
    title: "todo 2",
    id: 2,
    complete: false,
    priority: "priority1",
  },
  {
    title: "todo 3",
    id: 3,
    complete: false,
    priority: "priority3",
  },
  {
    title: "todo 4",
    id: 4,
    complete: false,
    priority: "priority2",
  },
  {
    title: "todo 5",
    id: 5,
    complete: false,
    priority: "priority3",
  },
];

export const priorities: TPriorities[] = [
  "priority1",
  "priority2",
  "priority3",
  "priority4",
];

export const themes: Record<TThemeKey, Theme> = {
  blueTheme: {
    header: "#2979ff", //A400
    footer: "#2979ff", //A400
    title: "blue",
    buttonTheme: "#2962ff", //A700
    appTheme: "#bbdefb", //100
    itemTheme: "#bbdefb", //200
  },

  redTheme: {
    header: "#ff1744", //A400
    footer: "#ff1744", //A400
    title: "red",
    buttonTheme: "#d50000", //A700
    itemTheme: "#ffcdd2", //100
    appTheme: "#ffcdd2", //200
  },

  orangeTheme: {
    header: "#ff9100", //A400
    footer: "#ff9100", //A400
    title: "orange",
    buttonTheme: "#ff6d00", //A700
    appTheme: "#ffcc80", //200
    itemTheme: "#ffcc80", //200
  },

  yellowTheme: {
    header: "#fbc02d", //700
    footer: "#fbc02d", //700
    title: "yellow",
    buttonTheme: "#f57f17", //900
    appTheme: "#fff176", //300
    itemTheme: "#fff176", //300
  },

  purpleTheme: {
    header: "#d500f9", //A400
    footer: "#d500f9", //A400
    title: "purple",
    buttonTheme: "#aa00ff", //A700
    appTheme: "#ce93d8", //200
    itemTheme: "#ede7f6", //100
  },

  greenTheme: {
    header: "#00e676", //A400
    footer: "#00e676", //A400
    title: "green",
    buttonTheme: "#00c853", //A700
    appTheme: "#a5d6a7", //200
    itemTheme: "#e8f5e9", //50
  },
};

export const FILTER_MAP: Record<TFilterKey, TFilterMethod> = {
  All: () => true,
  Active: (todo: Todo) => !todo.complete,
  Completed: (todo: Todo) => todo.complete,
  Priority1: (todo: Todo) => todo.priority === "priority1",
  Priority2: (todo: Todo) => todo.priority === "priority2",
  Priority3: (todo: Todo) => todo.priority === "priority3",
  Priority4: (todo: Todo) => todo.priority === "priority4",
};

export const FILTER_NAMES = Object.keys(FILTER_MAP) as TFilterKey[];
