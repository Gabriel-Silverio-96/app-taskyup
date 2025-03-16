import { Avatar, Tooltip } from "@mui/material";
import { AvatarGroup } from "modules/dashboard/Board/components/CardBoard/components/CardBoardAvatar/card-board-avatar.style";
import type { ICardBoardAvatar } from "modules/dashboard/Board/components/CardBoard/components/CardBoardAvatar/types";

const CardBoardAvatar: React.FC<ICardBoardAvatar> = ({ membersBoard }) => {
	return (
		<AvatarGroup max={4}>
			{membersBoard.map(({ first_name, full_name }, index) => {
				const firstLetterFirstName = first_name?.charAt(0);

				return (
					<Tooltip
						key={index}
						title={full_name || ""}
						placement="top">
						<Avatar>{firstLetterFirstName}</Avatar>
					</Tooltip>
				);
			})}
		</AvatarGroup>
	);
};

export default CardBoardAvatar;
