import {
	Button,
	Checkbox,
	Grid,
	IconButton,
	TextField,
	Typography,
} from "@mui/material";
import { FiPlus, FiTrash } from "react-icons/fi";
import { Todo, TodoContainer } from "./style";
import { NoteTodoView } from "./types";
import React from "react";

const NoteTodoView: React.FC<NoteTodoView> = props => {
	const {
		todoData,
		handleChangeCheckbox,
		handleBlurTextField,
		handleClickNewTodo,
		handleKeyDown,
		isAutoFocus,
		handleClickDeleteTodo,
	} = props;

	return (
		<div>
			<Grid container>
				<Grid item md={6}>
					<Typography variant="h6" fontWeight={800}>
						Todo
					</Typography>
				</Grid>
				<Grid item md={6} textAlign="right">
					<Button startIcon={<FiPlus />} onClick={handleClickNewTodo}>
						New todo
					</Button>
				</Grid>

				<TodoContainer>
					{todoData.todos.map(
						(
							{ checked, todo_id, title_todo, related_id }: any,
							index: number
						) => {
							const isLastTodo =
								index === todoData.todos.length - 1;

							const onKeyDown = isLastTodo
								? handleKeyDown
								: undefined;

							return (
								<Todo key={todo_id}>
									<div>
										<Checkbox
											checked={checked}
											onChange={event =>
												handleChangeCheckbox(
													event,
													todo_id
												)
											}
										/>
										<TextField
											autoFocus={isAutoFocus}
											size="small"
											defaultValue={title_todo}
											onBlur={event =>
												handleBlurTextField(
													event,
													todo_id
												)
											}
											onKeyDown={onKeyDown}
										/>
									</div>
									<div>
										<IconButton
											onClick={() =>
												handleClickDeleteTodo(
													todo_id,
													related_id
												)
											}>
											<FiTrash size={18} />
										</IconButton>
									</div>
								</Todo>
							);
						}
					)}
				</TodoContainer>
			</Grid>
		</div>
	);
};

export default NoteTodoView;
