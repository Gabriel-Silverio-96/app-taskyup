import { Grid, Typography } from "@mui/material";
import TodoCount from "shared/components/TodoCount";
import dateFormat from "shared/util/dateFormat";
import { ICardFooter } from "modules/notes/Note/components/CardNote/components/CardFooter/types";

const CardFooter: React.FC<ICardFooter> = ({
	total,
	total_checked,
	created_at,
}) => {
	const createdAtFormated = dateFormat(created_at);

	return (
		<Grid container justifyContent="space-between" sx={{ mt: 2 }}>
			<TodoCount total={total} totalChecked={total_checked} />
			<Typography variant="caption" color="GrayText">
				{createdAtFormated}
			</Typography>
		</Grid>
	);
};

export default CardFooter;