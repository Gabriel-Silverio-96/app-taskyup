import { Typography, useTheme } from "@mui/material";
import { LuListTodo } from "react-icons/lu";
import { ICON_SIZE } from "shared/constants";
import { ITodoCount } from "shared/components/TodoCount/types";
import { TodoCountContainer } from "shared/components/TodoCount/style";

const TodoCount: React.FC<ITodoCount> = ({ total, totalChecked }) => {
	const { palette } = useTheme();

	return (
		<TodoCountContainer>
			<LuListTodo size={ICON_SIZE.MEDIUM} color={palette.primary.main} />

			<Typography variant="caption" color="GrayText">
				{total}/{totalChecked}
			</Typography>
		</TodoCountContainer>
	);
};

export default TodoCount;
