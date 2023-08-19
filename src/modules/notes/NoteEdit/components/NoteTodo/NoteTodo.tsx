import React, { useEffect, useState } from "react";
import NoteTodoView from "./NoteTodoView";
import { useSearchParams } from "react-router-dom";
import api from "shared/services/api";

const NoteTodo: React.FC = () => {
	const [searchParams] = useSearchParams();
	const board_id = searchParams.get("board_id");
	const note_id = searchParams.get("note_id");

	const [todos, setTodos] = useState({ todos: [] });

	useEffect(() => {
		const getTodos = async () => {
			const { data } = await api.get("/todo/list", {
				params: { board_id, related_id: note_id },
			});
			setTodos(data);
		};
		getTodos();
	}, []);

	return <NoteTodoView {...{ todos }} />;
};

export default NoteTodo;
