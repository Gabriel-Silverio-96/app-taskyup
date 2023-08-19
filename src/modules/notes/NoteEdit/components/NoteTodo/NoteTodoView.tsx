import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { Todo, TodoContainer } from "./style";

const NoteTodoView: any = ({ todos }: any) => {
	return (
		<div>
			<Grid container>
				<Grid item md={6}>
					<Typography variant="h6" fontWeight={800}>
						Todo
					</Typography>
				</Grid>
				<Grid item md={6} textAlign="right">
					<Button startIcon={<FiPlus />}>New task</Button>
				</Grid>

				<TodoContainer>
					{todos.todos.map(
						({ checked, todo_id, title_todo }: any) => {
							return (
								<Todo key={todo_id}>
									<Checkbox defaultChecked={checked} />
									<TextField
										size="small"
										defaultValue={title_todo}
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
