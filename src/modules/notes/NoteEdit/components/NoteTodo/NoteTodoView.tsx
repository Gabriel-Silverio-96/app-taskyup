import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { Todo, TodoContainer } from "./style";

const NoteTodoView: any = ({
	todoData,
	handleChangeCheckbox,
	handleBlurTextField,
	handleClickNewTodo,
	handleKeyDown,
	isAutoFocus,
}: any) => {
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
							{ checked, todo_id, title_todo }: any,
							index: number
						) => {
							const isLastTodo =
								index === todoData.todos.length - 1;
							return (
								<Todo key={todo_id}>
									<Checkbox
										checked={checked}
										onChange={event =>
											handleChangeCheckbox(event, todo_id)
										}
									/>
									<TextField
										autoFocus={isAutoFocus}
										size="small"
										defaultValue={title_todo}
										onBlur={event =>
											handleBlurTextField(event, todo_id)
										}
										onKeyDown={
											isLastTodo
												? handleKeyDown
												: undefined
										}
									/>
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
