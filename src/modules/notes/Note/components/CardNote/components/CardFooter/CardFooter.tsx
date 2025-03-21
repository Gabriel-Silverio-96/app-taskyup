import { Grid, Typography } from "@mui/material";
import TodoCount from "shared/components/TodoCount";
import { dateFormat } from "shared/utils/date-format";
import type { ICardFooter } from "modules/notes/Note/components/CardNote/components/CardFooter/types";

const CardFooter: React.FC<ICardFooter> = ({
	total,
	total_checked,
	created_at,
}) => {
	const createdAtFormatted = dateFormat(created_at);

	return (
		<Grid
			container
			justifyContent="space-between"
			sx={{ mt: 2 }}
			className="card-footer">
			<TodoCount total={total} totalChecked={total_checked} />
			<Typography variant="caption" color="GrayText">
				{createdAtFormatted}
			</Typography>
		</Grid>
	);
};

export default CardFooter;
