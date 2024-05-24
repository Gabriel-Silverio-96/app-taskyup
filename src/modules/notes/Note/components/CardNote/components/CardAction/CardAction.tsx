import { IconButton, useTheme } from "@mui/material";
import { useDialogNote } from "modules/notes/Note/shared/hook/useDialogNote";
import { ICON_SIZE, MENU_QUERY_KEY, NOTE_QUERY_KEY } from "shared/constants";
import { createURLQueryParams } from "shared/utils/create-url-query-params";
import { CardActionContainer } from "modules/notes/Note/components/CardNote/components/CardAction/style";
import { FiEye, FiStar, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ICardAction } from "modules/notes/Note/components/CardNote/components/CardAction/types";
import { useQueryClient } from "@tanstack/react-query";
import { BOARD_TYPE_ID } from "shared/constants";
import {
	fetchDeleteFavoriteService,
	fetchPostFavoriteService,
} from "shared/services";

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
			if (favorite) {
				const params = { favorite_id, board_id, related_id: note_id };
				await fetchDeleteFavoriteService({ params });
				return;
			}

			const body = {
				related_id: note_id,
				board_id,
				board_type_id: BOARD_TYPE_ID.NOTES_BOARD_TYPE_ID,
			};

			await fetchPostFavoriteService({ body });
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
