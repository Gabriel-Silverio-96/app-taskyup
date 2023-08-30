import { Avatar, Tooltip } from "@mui/material";
import { AvatarGroup } from "./style";
import { ICardBoardAvatar } from "./types";

const CardBoardAvatar: React.FC<ICardBoardAvatar> = ({ membersBoard }) => {
	return (
		<AvatarGroup max={4}>
			{membersBoard.map(({ first_name, full_name }) => {
				const firstLetterFirstName = first_name?.charAt(0);

				return (
					<Tooltip key={first_name} title={full_name} placement="top">
						<Avatar alt={first_name}>{firstLetterFirstName}</Avatar>
					</Tooltip>
				);
			})}
		</AvatarGroup>
	);
};

export default CardBoardAvatar;
