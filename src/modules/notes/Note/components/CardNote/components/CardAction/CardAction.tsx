import { IconButton, useTheme } from "@mui/material";
import { useDialogNote } from "modules/notes/Note/shared/hook/useDialogNote";
import { ICON_SIZE } from "shared/constants";
import { createURLQueryParams } from "shared/util/createURLQueryParams";
import { CardActionContainer } from "modules/notes/Note/components/CardNote/components/CardAction/style";
import { FiEye, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ICardAction } from "modules/notes/Note/components/CardNote/components/CardAction/types";

const CardAction: React.FC<ICardAction> = ({ note_id, board_id }) => {
	const { palette } = useTheme();

	const { openDialogDeleteOneNote } = useDialogNote();

	const linkToNoteEdit = createURLQueryParams("/note/edit", {
		note_id,
		board_id,
	});

	return (
		<CardActionContainer id="card-action">
			<IconButton onClick={() => openDialogDeleteOneNote(note_id)}>
				<FiTrash color={palette.error.main} size={ICON_SIZE.MEDIUM} />
			</IconButton>
			<Link to={linkToNoteEdit}>
				<IconButton>
					<FiEye size={ICON_SIZE.MEDIUM} />
				</IconButton>
			</Link>
		</CardActionContainer>
	);
};

export default CardAction;
