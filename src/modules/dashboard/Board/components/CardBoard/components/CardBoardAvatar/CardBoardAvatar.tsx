import { Avatar, Tooltip } from "@mui/material";
import { AvatarGroup } from "./style";
import { ICardBoardAvatar } from "./types";

const CardBoardAvatar: React.FC<ICardBoardAvatar> = ({ membersBoard }) => {
	return (
		<AvatarGroup max={4}>
			{membersBoard.map(({ first_name, full_name }, index) => {
				const firstLetterFirstName = first_name?.charAt(0);

				return (
					<Tooltip key={index} title={full_name || ""} placement="top">
						<Avatar>{firstLetterFirstName}</Avatar>
					</Tooltip>
				);
			})}
		</AvatarGroup>
	);
};

export default CardBoardAvatar;
