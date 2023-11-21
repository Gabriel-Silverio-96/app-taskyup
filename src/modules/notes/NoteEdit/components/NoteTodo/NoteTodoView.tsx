import {
	Checkbox,
	Grid,
	IconButton,
	TextField,
	Typography,
	useTheme,
} from "@mui/material";
import React from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { Todo, TodoContainer, ButtonNewTodo } from "./style";
import { INoteTodoView } from "./types";
import { ICON_SIZE } from "shared/constants";
import EmptyBoard from "shared/components/EmptyBoard";
import { LuListTodo } from "react-icons/lu";

const NoteTodoView: React.FC<INoteTodoView> = props => {
	const {
		todoData,
		handleChangeCheckbox,
		handleBlurTextField,
		handleClickNewTodo,
		handleKeyDown,
		isAutoFocus,
		handleClickDeleteTodo,
	} = props;

	const { palette } = useTheme();

	return (
		<div>
			<Grid container>
				<Grid item md={6} sm xs>
					<Typography variant="h6" fontWeight={800}>
						Todo
					</Typography>
				</Grid>
				<Grid item md={6} sm xs textAlign="right">
					<ButtonNewTodo
						startIcon={<FiPlus size={ICON_SIZE.MEDIUM} />}
						onClick={handleClickNewTodo}>
						New todo
					</ButtonNewTodo>
				</Grid>

				<TodoContainer>
					{todoData.todos.map(
						(
							{ checked, todo_id, title_todo, related_id },
							index: number
						) => {
							const isLastTodo =
								index === todoData.todos.length - 1;

							const onKeyDown = isLastTodo
								? handleKeyDown
								: undefined;

							return (
								<Todo key={todo_id} checked={checked}>
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
											autoComplete="off"
											spellCheck="false"
											fullWidth
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
											<FiTrash size={ICON_SIZE.MEDIUM} />
										</IconButton>
									</div>
								</Todo>
							);
						}
					)}
				</TodoContainer>
			</Grid>

			<EmptyBoard
				image={
					<LuListTodo
						size={ICON_SIZE.DOUBLE_EXTRA_LARGE}
						color={palette.primary.main}
					/>
				}
				title="No todo created"
				message="Click button + to create todo"
				show={todoData.todos.length === 0}
				textAlign="center"
			/>
		</div>
	);
};

export default NoteTodoView;
