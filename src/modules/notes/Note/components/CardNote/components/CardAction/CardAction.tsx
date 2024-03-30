import { IconButton, useTheme } from "@mui/material";
import { useDialogNote } from "modules/notes/Note/shared/hook/useDialogNote";
import { ICON_SIZE, MENU_QUERY_KEY, NOTE_QUERY_KEY } from "shared/constants";
import { createURLQueryParams } from "shared/util/createURLQueryParams";
import { CardActionContainer } from "modules/notes/Note/components/CardNote/components/CardAction/style";
import { FiEye, FiStar, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ICardAction } from "modules/notes/Note/components/CardNote/components/CardAction/types";
import api from "shared/services/api";
import { useQueryClient } from "@tanstack/react-query";
import { NOTES_BOARD_TYPE_ID } from "shared/components/Drawer/components/Aside/components/DialogNewBoard/constants";

const CardAction: React.FC<ICardAction> = ({
	note_id,
	board_id,
	favorite_id,
	favorite,
}) => {
	const queryClient = useQueryClient();
	const { palette } = useTheme();

	const { openDialogDeleteOneNote } = useDialogNote();

	const linkToNoteEdit = createURLQueryParams("/note/edit", {
		note_id,
		board_id,
	});

	const handleClickFavorite = async () => {
		try {
			const data = {
				related_id: note_id,
				board_id,
				board_type_id: NOTES_BOARD_TYPE_ID,
			};

			if (favorite) {
				await api.delete(
					`favorite?favorite_id=${favorite_id}&board_id=${board_id}&related_id=${note_id}`
				);
				return;
			}

			await api.post("favorite", data);
		} catch (error) {
		} finally {
			await Promise.all([
				queryClient.invalidateQueries([NOTE_QUERY_KEY.FETCH_GET_NOTES]),
				queryClient.invalidateQueries([MENU_QUERY_KEY.FETCH_GET_MENU]),
			]);
		}
	};

	const defineIconColor = favorite
		? palette.secondary.main
		: palette.common.white;

	return (
		<CardActionContainer id="card-action">
			<IconButton onClick={() => openDialogDeleteOneNote(note_id)}>
				<FiTrash color={palette.error.main} size={ICON_SIZE.MEDIUM} />
			</IconButton>
			<IconButton onClick={handleClickFavorite}>
				<FiStar color={defineIconColor} size={ICON_SIZE.MEDIUM} />
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
