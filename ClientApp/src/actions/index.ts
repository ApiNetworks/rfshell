export const actions = {
  addTodo: (label: string) => ({ type: "addTodo", id: "12345", label }),
  remove: (id: string) => ({ type: "remove", id }),
  complete: (id: string) => ({ type: "complete", id }),
  clear: () => ({ type: "clear" }),
  setFilter: (filter: string) => ({ type: "setFilter", filter })
};
