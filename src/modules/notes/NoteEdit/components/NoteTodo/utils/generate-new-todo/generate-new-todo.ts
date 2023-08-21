const generateNewTodo = () => ({
	todo_id: crypto.randomUUID(),
	title_todo: "",
	checked: false,
});

export { generateNewTodo };
