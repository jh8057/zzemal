{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>) {
    return { ...todo, ...fieldsToUpdate };
  }
  const toDo: ToDo = {
    title: "study",
    description: "hard",
    label: "everyday",
    priority: "high",
  };
  const updated = updateTodo(toDo, {
    title: "study typescript",
    priority: "low",
  });
  console.log(toDo);
  console.log(updated);
}
