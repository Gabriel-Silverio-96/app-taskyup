import { Typography } from "@mui/material";
import { dateFormat } from "shared/utils/date-format";
import { CardContentContainer } from "modules/texts/Text/components/CardText/components/CardContent/style";
import { ICardContent } from "modules/texts/Text/components/CardText/components/CardContent/types";

const CardContent: React.FC<ICardContent> = ({ title_text, created_at }) => {
	const createdAtFormatted = dateFormat(created_at);

	return (
		<CardContentContainer>
			<Typography variant="body1" fontWeight={800}>
				{title_text}
			</Typography>
			<Typography variant="caption" color="GrayText">
				{createdAtFormatted}
			</Typography>
		</CardContentContainer>
	);
};

export default CardContent;
